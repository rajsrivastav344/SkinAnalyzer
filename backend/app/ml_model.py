import pandas as pd
import joblib
import os
import kagglehub
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

MODEL_PATH = "model.pkl"

def download_and_load_dataset():
    print("Downloading real skincare dataset...")
    
    path = kagglehub.dataset_download("kazireyazulhasan/19000-skincare-products-database-of-skinsort")
    print("Dataset downloaded at:", path)
    
    files = [f for f in os.listdir(path) if f.endswith('.csv')]
    csv_path = os.path.join(path, files[0])
    
    df = pd.read_csv(csv_path)
    print(f"✅ Loaded {len(df)} products")
    print("Columns:", df.columns.tolist())
    
    return df


def load_or_train_model():
    if os.path.exists(MODEL_PATH):
        try:
            return joblib.load(MODEL_PATH)
        except:
            os.remove(MODEL_PATH)

    df = download_and_load_dataset()

    # Using correct column names from your dataset
    df = df.dropna(subset=['name', 'ingridients'])
    
    df['ingridients'] = df['ingridients'].fillna('')
    df['name'] = df['name'].fillna('')
    df['brand'] = df.get('brand', '').fillna('')

    # Create combined features for better matching
    df['combined_features'] = (
        df['name'].astype(str) + " " +
        df['brand'].astype(str) + " " +
        df['ingridients'].astype(str)
    )

    tfidf = TfidfVectorizer(stop_words='english', max_features=8000)
    tfidf_matrix = tfidf.fit_transform(df['combined_features'])

    model_data = {
        'df': df,
        'tfidf': tfidf,
        'tfidf_matrix': tfidf_matrix
    }

    joblib.dump(model_data, MODEL_PATH)
    print("✅ Model trained successfully with real dataset!")
    return model_data


def predict_product(input_data: dict):
    model_data = load_or_train_model()
    
    df = model_data['df']
    tfidf = model_data['tfidf']
    tfidf_matrix = model_data['tfidf_matrix']

    # Build user query
    user_query = f"{input_data['skin_type']} skin " + " ".join(input_data['concerns'])
    
    user_vector = tfidf.transform([user_query])
    similarity_scores = cosine_similarity(user_vector, tfidf_matrix).flatten()

    # Get Top 3 recommendations
    top_indices = similarity_scores.argsort()[-3:][::-1]
    
    recommendations = []
    for idx in top_indices:
        product = df.iloc[idx]
        recommendations.append({
            "product_name": str(product['name']),
            "brand": str(product.get('brand', 'Unknown')),
            "confidence": round(float(similarity_scores[idx]) * 100, 1),
            "ingredients": str(product.get('ingridients', ''))[:180] + "..."
        })

    return {
        "recommended_product": recommendations[0]["product_name"],
        "brand": recommendations[0]["brand"],
        "confidence": recommendations[0]["confidence"],
        "expected_outcome": f"Best match for {input_data['skin_type']} skin with {input_data['concerns'][0]}",
        "top_recommendations": recommendations
    }
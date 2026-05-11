from pydantic import BaseModel
from typing import List, Optional

class SkinInput(BaseModel):
    age: int
    skin_type: str                    # dry, oily, combination, sensitive, normal
    concerns: List[str]               # acne, wrinkles, pigmentation, etc.
    gender: str
    
    # Skin Characteristics
    skin_tone: Optional[str] = None           # fair, light, medium, tan, deep
    undertone: Optional[str] = None           # cool, warm, neutral
    sensitivity_level: Optional[str] = "medium"  # low, medium, high
    
    # Allergies & Reactions
    allergies: Optional[List[str]] = None     # ["fragrance", "alcohol", "retinol", "niacinamide"]
    known_reactions: Optional[List[str]] = None
    
    # Lifestyle & Health
    is_pregnant: Optional[bool] = False
    is_breastfeeding: Optional[bool] = False
    has_hormonal_issues: Optional[bool] = False
    stress_level: Optional[str] = "medium"    # low, medium, high
    sleep_hours: Optional[int] = None
    
    # Preferences
    budget_preference: Optional[str] = "medium"   # low, medium, high, premium
    desired_results_time: Optional[str] = "4-8 weeks"
    product_preferences: Optional[List[str]] = None   # ["clean beauty", "vegan", "cruelty-free", "fragrance-free"]
    
    # Current Skincare Routine
    current_routine: Optional[List[str]] = None      # ["cleanser", "toner", "serum", "moisturizer", "sunscreen"]
    current_products: Optional[List[str]] = None     # e.g. ["The Ordinary Niacinamide", ...]
    
    # Additional Information
    photo_url: Optional[str] = None
    notes: Optional[str] = None                       # Any extra user notes

    class Config:
        schema_extra = {
            "example": {
                "age": 28,
                "skin_type": "combination",
                "concerns": ["acne", "pigmentation", "oiliness"],
                "gender": "female",
                "skin_tone": "medium",
                "undertone": "neutral",
                "sensitivity_level": "medium",
                "allergies": ["fragrance", "alcohol"],
                "is_pregnant": False,
                "is_breastfeeding": False,
                "has_hormonal_issues": True,
                "stress_level": "high",
                "sleep_hours": 6,
                "budget_preference": "medium",
                "desired_results_time": "4-8 weeks",
                "product_preferences": ["vegan", "fragrance-free"],
                "current_routine": ["cleanser", "serum", "moisturizer"],
                "notes": "I have PCOS and my skin breaks out before periods"
            }
        }
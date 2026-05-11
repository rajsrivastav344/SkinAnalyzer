from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from datetime import datetime
import os

def generate_report(prediction: dict, user_input: dict):
    os.makedirs("reports", exist_ok=True)
    filename = f"reports/skin_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    
    # Use A4 for better readability
    doc = SimpleDocTemplate(filename, pagesize=A4, rightMargin=40, leftMargin=40, topMargin=40, bottomMargin=40)
    styles = getSampleStyleSheet()
    story = []

    # Header
    title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=28, spaceAfter=20, alignment=1, textColor=colors.darkblue)
    story.append(Paragraph("GlowPredict", title_style))
    story.append(Paragraph("Personalized Skincare Analysis Report", styles['Heading2']))
    story.append(Paragraph(f"Generated: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}", styles['Normal']))
    story.append(Spacer(1, 30))

    # ==================== USER PROFILE ====================
    story.append(Paragraph("Your Skin Profile", styles['Heading2']))

    profile_data = [
        ["Age", str(user_input.get('age', 'N/A'))],
        ["Gender", user_input.get('gender', 'N/A').capitalize()],
        ["Skin Type", user_input.get('skin_type', 'N/A').capitalize()],
        ["Skin Tone", user_input.get('skin_tone', 'N/A')],
        ["Undertone", user_input.get('undertone', 'N/A')],
        ["Sensitivity", user_input.get('sensitivity_level', 'N/A')],
        ["Stress Level", user_input.get('stress_level', 'N/A')],
        ["Sleep Hours", str(user_input.get('sleep_hours', 'N/A')) + " hrs"],
        ["Pregnant", "Yes" if user_input.get('is_pregnant') else "No"],
        ["Breastfeeding", "Yes" if user_input.get('is_breastfeeding') else "No"],
        ["Hormonal Issues", "Yes" if user_input.get('has_hormonal_issues') else "No"],
        ["Budget", user_input.get('budget_preference', 'N/A').capitalize()],
    ]

    t = Table(profile_data, colWidths=[180, 280])
    t.setStyle(TableStyle([
        ('GRID', (0,0), (-1,-1), 1, colors.grey),
        ('BACKGROUND', (0,0), (0,-1), colors.lightgrey),
        ('PADDING', (0,0), (-1,-1), 10),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 11),
    ]))
    story.append(t)
    story.append(Spacer(1, 25))

    # Concerns & Allergies
    story.append(Paragraph("Concerns & Allergies", styles['Heading3']))
    story.append(Paragraph(f"<b>Concerns:</b> {', '.join(user_input.get('concerns', ['None']))}", styles['Normal']))
    
    if user_input.get('allergies'):
        story.append(Paragraph(f"<b>Allergies:</b> {', '.join(user_input.get('allergies', []))}", styles['Normal']))
    
    story.append(Spacer(1, 30))

    # ==================== RECOMMENDATIONS ====================
    story.append(Paragraph("AI Recommendation", styles['Heading2']))
    
    story.append(Paragraph(f"<b>Top Recommendation:</b> {prediction.get('recommended_product', 'N/A')}", styles['Normal']))
    story.append(Paragraph(f"<b>Brand:</b> {prediction.get('brand', 'N/A')}", styles['Normal']))
    story.append(Paragraph(f"<b>Confidence:</b> <font color='green'>{prediction.get('confidence', 0)}%</font>", styles['Normal']))
    story.append(Paragraph(f"<b>Expected Improvement:</b> {prediction.get('expected_outcome', 'N/A')}", styles['Normal']))
    story.append(Spacer(1, 25))

    # Top 3 Recommendations
    if prediction.get('top_recommendations'):
        story.append(Paragraph("Top 3 Recommendations", styles['Heading3']))
        for i, rec in enumerate(prediction.get('top_recommendations', []), 1):
            rec_data = [
                [f"{i}. {rec.get('product_name', '')}", f"Match: {rec.get('confidence', 0)}%"],
                ["Brand", rec.get('brand', 'Unknown')],
                ["Key Ingredients", rec.get('ingredients', 'N/A')]
            ]
            rec_table = Table(rec_data, colWidths=[320, 160])
            rec_table.setStyle(TableStyle([
                ('GRID', (0,0), (-1,-1), 1, colors.lightgrey),
                ('BACKGROUND', (0,0), (0,0), colors.lightblue),
                ('PADDING', (0,0), (-1,-1), 8),
            ]))
            story.append(rec_table)
            story.append(Spacer(1, 15))

    story.append(Spacer(1, 40))
    story.append(Paragraph("⚠️ Important Disclaimer", styles['Heading4']))
    story.append(Paragraph("This is an AI-generated report based on the information you provided. It is for educational purposes only and should not replace professional medical or dermatological advice.", styles['Normal']))

    doc.build(story)
    return filename
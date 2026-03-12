# Portfolio Website - Nguyễn Thị Thanh Hương

## Introduction
This is a personal portfolio website for Nguyễn Thị Thanh Hương - a student majoring in Financial Analysis and Investment at Foreign Trade University.

## Features
✨ **Sticky Navbar** - Navigation menu always visible when scrolling  
🎨 **Responsive Design** - Compatible with all screen sizes  
📱 **Mobile-friendly** - Supports hamburger menu on mobile devices  
🌈 **Pastel Sky Blue Color** - Eye-catching and professional design  
⚡ **Smooth Animations** - Fluid animations when scrolling  
📝 **Contact Form** - Allows visitors to send messages  

## Page Structure
1. **Home** - Welcome landing section
2. **Profile** - Personal information and introduction
3. **Education** - Educational background
4. **Skills** - Technical and soft skills
5. **Activities** - Extracurricular activities
6. **Qualities** - Personal qualities
7. **Contact** - Contact information and message form

## How to Use

### Open in Browser
1. Open the `index.html` file with your web browser (Chrome, Firefox, Safari, Edge...)
2. Or right-click => "Open with" => select your browser

### Edit Information
To update personal information, email, or other content:
1. Open the `index.html` file with a text editor
2. Find and change the information you need
3. Save the file
4. Reload the page in your browser (Ctrl+R or Cmd+R)

### Change Colors
To change the pastel color palette:
1. Open the `styles.css` file
2. Find the `:root` section at the beginning of the file
3. Change the color variables:
   - `--primary`: Primary color
   - `--primary-dark`: Darker primary color
   - `--primary-light`: Lighter primary color

Example pastel colors:
- **Pastel Pink**: #f5a9d0
- **Pastel Purple**: #c8a3f5
- **Pastel Green**: #a3f59b
- **Pastel Yellow**: #f5e5a3

### Add Profile Picture
1. Save your image to the portfolio folder as `avatar.jpg`
2. Open `index.html` and find the `<div class="avatar-placeholder">` section
3. Replace it with: `<img src="avatar.jpg" alt="Avatar" class="avatar-img">`
4. Add this CSS to `styles.css`:
```css
.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}
```

## Files

| File | Description |
|------|-------------|
| `index.html` | HTML structure of the website |
| `styles.css` | CSS styling and layout |
| `script.js` | JavaScript for interactions |
| `README.md` | This guide |

## Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installation needed

## Compatibility
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablet
- ✅ Mobile

## Advanced Customization

### Add Projects/Work Experience
Open `index.html` and find the "Skills" or "Activities" section, copy a card, and edit the content.

### Set Up Email Functionality
Currently, the form only shows a thank you message. To send actual emails, you need:
1. A backend server or service like Formspree, EmailJS, or Firebase
2. Update `script.js` to send form data

## Support
To edit or upgrade the website, you can:
1. Search for HTML/CSS/JavaScript tutorials online
2. Use editors like VS Code, Sublime Text to edit code
3. Test in different browsers to ensure compatibility

## Notes
- Update all external links (social media) in the Footer section
- You can change the email by editing the Contact section
- Deploy this website on platforms like GitHub Pages, Netlify, Vercel, or other hosting services

---

**Created by:** GitHub Copilot  
**Created Date:** 13/03/2026  
**Version:** 1.0

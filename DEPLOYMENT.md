# 🚀 Deployment Guide - 90's Vintage Website

## Quick Start

Your 90's vintage website is ready to deploy! Here are the easiest deployment options:

### Option 1: GitHub Pages (Recommended)
1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Your site will be live at**:
   ```
   https://yourusername.github.io/repository-name
   ```

3. **Custom Domain** (Optional):
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider

### Option 2: Netlify
1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Deploy Settings**:
   - Build command: (leave empty)
   - Publish directory: (leave empty)
   - Click "Deploy site"

3. **Custom Domain**:
   - Add your domain in Netlify dashboard
   - Update DNS records as instructed

### Option 3: Vercel
1. **Import Project**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import from GitHub

2. **Deploy**:
   - Framework Preset: Other
   - Root Directory: ./
   - Click "Deploy"

### Option 4: Traditional Web Hosting
1. **Upload Files**:
   - Use FTP/SFTP to upload all files
   - Ensure `index.html` is in the root directory

2. **File Permissions**:
   - Set directories to 755
   - Set files to 644

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Update personal information in all HTML files
- [ ] Replace placeholder email addresses with real ones
- [ ] Add actual GitHub/LinkedIn/social media links
- [ ] Upload real profile photo to `images/profile.jpg`
- [ ] Update resume PDF in `assets/resume.pdf`

### Technical Checks
- [ ] Test all navigation links
- [ ] Verify contact form functionality
- [ ] Check responsive design on mobile
- [ ] Test JavaScript features (visitor counter, animations)
- [ ] Validate HTML and CSS
- [ ] Optimize images for web

### SEO & Performance
- [ ] Add meta descriptions to each page
- [ ] Include Open Graph tags for social sharing
- [ ] Optimize images (compress if needed)
- [ ] Add alt text to images
- [ ] Test page load speeds

## 🌐 Live Testing

After deployment, test these features:
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Contact form submission
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility
- [ ] ASCII art displays correctly
- [ ] Animations and effects work

## 📱 Social Media Setup

### Open Graph Tags (Add to `<head>` of each page):
```html
<meta property="og:title" content="Rohan Surana - AI Research Engineer">
<meta property="og:description" content="90's vintage personal website showcasing AI research and software engineering experience">
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">
```

### Twitter Cards:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@rohan_codes">
<meta name="twitter:title" content="Rohan Surana - 90's Vintage Website">
<meta name="twitter:description" content="Nostalgic personal website with modern content">
<meta name="twitter:image" content="https://yourdomain.com/images/twitter-card.jpg">
```

## 🔍 Analytics Setup

### Google Analytics (Optional):
1. Create GA4 property
2. Add tracking code to all pages:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚨 Security Considerations

### Contact Form
- **Note**: The current form is frontend-only
- For production, implement backend processing:
  - Node.js + Express
  - Netlify Forms
  - Formspree service
  - AWS Lambda function

### Content Security Policy:
Add to `<head>` for enhanced security:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';">
```

## 🔄 Maintenance

### Regular Updates
- Update contact information
- Add new projects and experiences
- Refresh travel blog content
- Update visitor counter logic
- Monitor and fix broken links

### Performance Monitoring
- Check page load speeds monthly
- Monitor for broken images/links
- Test form functionality
- Verify mobile compatibility

## 🆘 Troubleshooting

### Common Issues

**CSS Not Loading**:
- Check file paths are correct
- Verify MIME types on server
- Clear browser cache

**JavaScript Not Working**:
- Check console for errors
- Verify file paths
- Test in different browsers

**Images Not Displaying**:
- Check file extensions (.jpg, .png, .svg)
- Verify file paths
- Check file permissions

**Mobile Display Issues**:
- Test viewport meta tag
- Check CSS media queries
- Verify touch interactions

### Debug Mode
Add to JavaScript for debugging:
```javascript
// Add to top of script.js for debugging
console.log('90s Website Debug Mode: ON');
window.debugMode = true;
```

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Validate HTML/CSS
3. Test in incognito mode
4. Compare with working version

## 🎉 Go Live!

Your 90's vintage website is ready to take the internet by storm! 

**Remember**: This website is optimized for Netscape Navigator 4.0+ and is fully Y2K compliant! 😄

---

*Happy deploying! May your site load fast and your visitor counter climb high!* 💾
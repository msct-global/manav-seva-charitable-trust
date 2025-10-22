# Deployment Guide - Manav Seva Charitable Trust

## 🚀 Deployment Options

### Option 1: Vercel (Recommended) ⭐

Vercel is the official Next.js hosting platform and offers the best experience.

#### Prerequisites
- GitHub account with repository
- Vercel account (free tier available)
- Domain (msct.in) with DNS access

#### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js migration"
   git remote add origin https://github.com/yourusername/msct-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add all variables from `.env.example`
   - Set `NODE_ENV=production`

4. **Configure Custom Domain**
   - In Vercel dashboard: Settings → Domains
   - Add `msct.in`
   - Update DNS records at one.com:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     
     Type: A
     Name: @
     Value: 76.76.19.21
     ```

5. **Deploy**
   - Vercel automatically deploys on push to main
   - View deployment at https://msct.in

#### Vercel Free Tier Includes
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Environment variables
- ✅ Custom domains
- ✅ Analytics

---

### Option 2: Self-Hosted (VPS/Server)

For more control and customization.

#### Prerequisites
- VPS or dedicated server (Ubuntu 20.04+ recommended)
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache for reverse proxy
- SSL certificate (Let's Encrypt)

#### Steps

1. **Prepare Server**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone Repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/msct-website.git
   cd msct-website
   ```

3. **Install Dependencies & Build**
   ```bash
   npm install
   npm run build
   ```

4. **Configure PM2**
   ```bash
   pm2 start npm --name "msct" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name msct.in www.msct.in;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d msct.in -d www.msct.in
   ```

7. **Update DNS at one.com**
   ```
   Type: A
   Name: @
   Value: your_server_ip
   
   Type: A
   Name: www
   Value: your_server_ip
   ```

---

### Option 3: Docker Deployment

For containerized deployment.

#### Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

#### Build & Run
```bash
docker build -t msct-website .
docker run -p 3000:3000 msct-website
```

---

## 📋 Pre-Deployment Checklist

- [ ] All pages tested locally
- [ ] Responsive design verified on mobile
- [ ] All links working correctly
- [ ] Images loading properly
- [ ] Forms submitting correctly
- [ ] No console errors
- [ ] SEO metadata in place
- [ ] Environment variables configured
- [ ] Database connection tested (if applicable)
- [ ] Payment gateway configured (if applicable)
- [ ] Email notifications working (if applicable)
- [ ] Analytics configured
- [ ] Backup strategy in place

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Environment variables not exposed
- [ ] Database credentials secured
- [ ] API keys protected
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Input validation in place
- [ ] SQL injection prevention
- [ ] XSS protection enabled

## 📊 Post-Deployment

### Monitor Performance
```bash
# Vercel Analytics
# Dashboard → Analytics

# Server Monitoring (Self-hosted)
pm2 monit
```

### Setup Monitoring
- Google Analytics
- Sentry for error tracking
- Uptime monitoring
- Performance monitoring

### Backup Strategy
- Daily database backups
- Weekly full backups
- Test restore procedures
- Store backups securely

## 🔄 Continuous Deployment

### GitHub Actions (for self-hosted)
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

## 🆘 Troubleshooting

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Pages not loading
```bash
# Check logs
pm2 logs msct
# or
docker logs container_id
```

### Issue: Database connection error
- Verify DATABASE_URL in environment
- Check database server is running
- Verify network connectivity

### Issue: Images not loading
- Verify images in public folder
- Check image paths
- Verify CDN configuration

## 📞 Support

For deployment issues:
- Email: manavsevacharitabletrust773@gmail.com
- Phone: +91 79768 92938

## 📚 Additional Resources

- [Vercel Deployment Docs](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Nginx Configuration](https://nginx.org/en/docs/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [Docker Documentation](https://docs.docker.com/)

---

**Last Updated**: October 2025
**Status**: Ready for Deployment ✅


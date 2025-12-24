# Domain Setup Guide: blessificator.com → Vercel

## Step 1: Add Domain in Vercel

1. Go to https://vercel.com and sign in
2. Open your **portfolio2025** project
3. Go to **Settings** → **Domains**
4. Enter: `blessificator.com`
5. Click **Add**
6. Also add: `www.blessificator.com` (optional but recommended)
7. Vercel will show you DNS records - **copy them down** (you'll need them in Step 2)

## Step 2: Configure DNS in home.pl

### Access DNS Settings in home.pl:

1. Log in to your **home.pl** account
2. Go to **Moje Domeny** (My Domains) or **Zarządzanie Domenami** (Domain Management)
3. Find **blessificator.com** in your domain list
4. Click on it or find **DNS** / **Zarządzanie DNS** (DNS Management)
5. Look for **Rekordy DNS** (DNS Records) or **Edycja DNS** (Edit DNS)

### Add DNS Records:

You need to add these records (Vercel will show you the exact values, but typically):

#### For Root Domain (blessificator.com):

**Option A: A Record (Recommended)**
- **Typ rekordu** (Record Type): `A`
- **Nazwa** (Name): `@` or leave blank or `blessificator.com`
- **Wartość** (Value): `76.76.21.21` (or the IP Vercel shows you)
- **TTL**: `3600` or Auto

**Option B: CNAME (Alternative)**
- **Typ rekordu** (Record Type): `CNAME`
- **Nazwa** (Name): `@` or leave blank
- **Wartość** (Value): `cname.vercel-dns.com` (or what Vercel shows)

#### For WWW Subdomain (www.blessificator.com):

- **Typ rekordu** (Record Type): `CNAME`
- **Nazwa** (Name): `www`
- **Wartość** (Value): `cname.vercel-dns.com` (or what Vercel shows)
- **TTL**: `3600` or Auto

### Important Notes for home.pl:

- If you see existing A or CNAME records for `@` or root, you may need to **edit** them instead of adding new ones
- Some registrars don't allow CNAME for root domain - use A record instead
- Make sure to **Save** / **Zapisz** your changes

## Step 3: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most changes
- You can check propagation status at: https://dnschecker.org

## Step 4: Verify in Vercel

1. Go back to Vercel → Settings → Domains
2. Check the status of `blessificator.com`
3. It should show:
   - ✅ **Valid Configuration** (when DNS is correct)
   - 🔄 **Pending** (while waiting for DNS)
   - ❌ **Invalid Configuration** (if DNS is wrong - check records)

## Step 5: SSL Certificate

- Vercel automatically issues SSL certificate (free)
- Takes **5-15 minutes** after DNS is configured
- Your site will be available at `https://blessificator.com`

## Troubleshooting

### If domain doesn't work after 24 hours:

1. **Check DNS records match exactly** what Vercel shows
2. **Verify TTL** - lower TTL (300-600) helps with faster updates
3. **Remove conflicting records** - make sure no other A/CNAME records conflict
4. **Check Vercel dashboard** - it will show specific errors

### Common Issues:

- **"Invalid Configuration"** → DNS records don't match Vercel's requirements
- **"Pending" for too long** → DNS hasn't propagated yet, wait longer
- **Site not loading** → Check if DNS has propagated using dnschecker.org

## Quick Reference

**Domain:** blessificator.com  
**Registrar:** home.pl  
**Hosting:** Vercel (portfolio2025 project)

**Typical DNS Records Needed:**
- A record: `@` → `76.76.21.21` (or Vercel's IP)
- CNAME: `www` → `cname.vercel-dns.com` (or Vercel's CNAME)

---

**Need help?** Check Vercel's domain documentation or their support.


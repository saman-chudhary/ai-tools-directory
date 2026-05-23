# 🚀 Complete Deployment Guide
## AI Tools Directory — VS Code + GitHub + Vercel

---

## OVERVIEW

You will:
1. Set up the project in VS Code
2. Run it locally to confirm it works
3. Push to GitHub
4. Deploy to Vercel (live URL in 2 minutes)

**Time needed:** ~20 minutes (first time)

---

## STEP 1 — Install required tools

Before starting, make sure these are installed on your computer:

### 1A. Install Node.js
- Go to: https://nodejs.org
- Download the **LTS version** (e.g. 20.x)
- Run the installer, click Next through everything
- Verify: open a terminal and type:
  ```
  node --version
  ```
  You should see: `v20.x.x`

### 1B. Install VS Code
- Go to: https://code.visualstudio.com
- Download and install for your OS

### 1C. Install Git
- Go to: https://git-scm.com/downloads
- Download and install
- Verify: open a terminal and type:
  ```
  git --version
  ```
  You should see: `git version 2.x.x`

### 1D. Create accounts (free)
- **GitHub:** https://github.com/signup
- **Vercel:** https://vercel.com/signup (sign up with GitHub — easiest!)

---

## STEP 2 — Open project in VS Code

### 2A. Get the project files
Copy the `ai-tools-directory` folder you downloaded to a location on your computer, for example:
```
C:\Users\YourName\projects\ai-tools-directory     (Windows)
/Users/yourname/projects/ai-tools-directory        (Mac/Linux)
```

### 2B. Open in VS Code
1. Open VS Code
2. Click **File → Open Folder**
3. Navigate to and select your `ai-tools-directory` folder
4. Click **Open**

You should now see all the project files in the left sidebar.

### 2C. Open the terminal inside VS Code
- Press **Ctrl + ` ** (backtick) on Windows/Linux
- Press **Cmd + ` ** on Mac
- A terminal panel opens at the bottom

---

## STEP 3 — Install dependencies & run locally

In the VS Code terminal, type these commands one at a time:

```bash
# Install all packages (takes 1-2 minutes)
npm install
```

Wait for it to finish. You'll see a message like `added 350 packages`.

```bash
# Start the development server
npm run dev
```

You'll see:
```
▲ Next.js 15.1.0
- Local:  http://localhost:3000
- Ready in 2s
```

### 3A. Preview in browser
- Open your browser
- Go to: **http://localhost:3000**
- You should see the AI Tools Directory homepage! 🎉

### 3B. Test all pages
While the server is running, visit:
- http://localhost:3000/tools — browse page
- http://localhost:3000/tools/chatgpt — tool detail
- http://localhost:3000/category/writing — category page
- http://localhost:3000/submit — submit form
- http://localhost:3000/about — about page

If everything looks good, stop the server:
- Press **Ctrl + C** in the terminal

---

## STEP 4 — Push to GitHub

### 4A. Create a new GitHub repository
1. Go to https://github.com/new
2. Repository name: `ai-tools-directory`
3. Set to **Public** (so Vercel can access it for free)
4. **Do NOT** check "Add a README file" (we already have one)
5. Click **Create repository**

You'll see a page with setup instructions — leave it open.

### 4B. Initialize Git in VS Code terminal

Make sure you're in the project folder in the terminal, then run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: AI Tools Directory"
```

### 4C. Connect to GitHub and push

Copy the commands from the GitHub page you left open. They look like:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-tools-directory.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

After running these, refresh your GitHub page — you should see all your files there! ✅

---

## STEP 5 — Deploy to Vercel

### 5A. Connect Vercel to GitHub
1. Go to https://vercel.com
2. Click **Add New → Project**
3. Click **Continue with GitHub** if prompted
4. Find `ai-tools-directory` in your repository list
5. Click **Import**

### 5B. Configure the project
Vercel auto-detects Next.js — you don't need to change anything.

- **Framework Preset:** Next.js (auto-detected ✅)
- **Root Directory:** ./ (leave as is)
- **Build Command:** `next build` (auto-filled ✅)
- **Output Directory:** `.next` (auto-filled ✅)

Click **Deploy** (the big button).

### 5C. Wait for deployment
- Takes about 60–90 seconds
- Watch the build logs scroll by
- When you see **"Congratulations!"** — you're live! 🚀

### 5D. Get your live URL
Vercel gives you a URL like:
```
https://ai-tools-directory-yourusername.vercel.app
```

Click it — your site is live on the internet!

---

## STEP 6 — Set up automatic deployments (already done!)

From now on, every time you push to GitHub, Vercel automatically redeploys:

```bash
# Make a change, then:
git add .
git commit -m "Add new tool to directory"
git push
```

Vercel detects the push and deploys within ~60 seconds. No manual steps needed.

---

## STEP 7 — Add to your portfolio

### Update the README
In VS Code, open `README.md` and replace the placeholder URLs:
```markdown
🔗 **Live demo:** [ai-tools-directory.vercel.app](https://your-actual-url.vercel.app)
```

### Update the About page
Open `app/about/page.tsx` and update the GitHub link to your real repo URL.

### Optional: Custom domain
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `aitoolsdirectory.com`)
3. Follow the DNS instructions

---

## TROUBLESHOOTING

### "npm: command not found"
→ Node.js is not installed. Go back to Step 1A.

### "git: command not found"
→ Git is not installed. Go back to Step 1C.

### Build fails on Vercel
→ Check the build logs. Most common fix:
```bash
# Run build locally first to catch errors:
npm run build
```
Fix any TypeScript errors shown, then push again.

### Port 3000 already in use
→ Run on a different port:
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Changes not showing on Vercel
→ Make sure you pushed to GitHub:
```bash
git status          # check for uncommitted changes
git add .
git commit -m "your message"
git push
```

---

## USEFUL VS CODE EXTENSIONS

Install these from the Extensions panel (Ctrl+Shift+X):

| Extension | Why |
|---|---|
| **ES7+ React/Redux/React-Native snippets** | Fast React component shortcuts |
| **Tailwind CSS IntelliSense** | Autocomplete for Tailwind classes |
| **Prettier** | Auto-format your code |
| **GitLens** | See git history inline |
| **Error Lens** | See TypeScript errors inline |

---

## ADDING MORE TOOLS LATER

1. Open `data/tools.json`
2. Copy an existing tool entry
3. Paste it at the end (before the final `]`)
4. Update all the fields
5. Save the file
6. Push to GitHub → auto-deploys to Vercel

```bash
git add data/tools.json
git commit -m "Add [ToolName] to directory"
git push
```

Done! Your site updates in ~60 seconds.

---

*Built with Next.js 15 · Deployed on Vercel · Source on GitHub*

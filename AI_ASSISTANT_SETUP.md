# AI Voice Assistant Setup Guide

## ✅ What's Been Implemented

Your website now has a **fully functional AI-powered voice assistant** that:

### 🎯 Features:
1. **Real AI Conversations** - Uses Groq API with Mixtral-8x7b model
2. **Voice Input** - Speak your questions using Web Speech API
3. **Voice Output** - AI responds with speech (Text-to-Speech)
4. **Course Recommendations** - Helps customers choose the right cybersecurity course
5. **Smart Context** - Remembers conversation history
6. **Beautiful UI** - Futuristic theme with loading states and animations

### 🎤 Voice Controls:
- **Microphone Icon**: Click to start/stop voice input
- **Speaker Icon**: Toggle voice output on/off
- **Auto-Speak**: AI automatically speaks responses (can be toggled)

---

## 🔧 Setup Instructions

### Step 1: Create Environment File

Create a file named `.env.local` in the root directory:

```bash
# Navigate to the folder where you have this project
cd <your-project-folder>

# Create the environment file
touch .env.local
```

### Step 2: Add Your API Key

Open `.env.local` and add:

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY_HERE
```

**⚠️ IMPORTANT**: Never commit `.env.local` to version control! It's already in `.gitignore`.

### Step 3: Restart Development Server

```bash
# Stop current server (Ctrl+C)
# Then restart
npm run dev
```

### Step 4: Test the Assistant

1. Open your browser to `http://localhost:3002/assistant`
2. Click the microphone icon and speak
3. Or type a question like: *"I'm a beginner, which course should I take?"*
4. The AI will respond with personalized recommendations!

---

## 💬 What the AI Can Do

The AI assistant is programmed to:

✅ **Understand student backgrounds** (beginner, intermediate, advanced, expert)
✅ **Recommend appropriate courses** based on experience level
✅ **Explain course benefits** and career opportunities
✅ **Answer questions** about training structure (70% practical, 30% theory)
✅ **Share placement information** (IBM, Dell, Wipro, TCS, etc.)
✅ **Guide career paths** in cybersecurity

### Example Conversations:

**Student**: "I'm new to cybersecurity, where should I start?"

**AI**: "Great! As a beginner, I'd recommend starting with our Basic Cyber Security Course. It's designed specifically for those entering the field, runs for 2-3 months, and covers fundamental security concepts. It's the perfect foundation before moving to more advanced topics..."

**Student**: "I want to become a SOC analyst"

**AI**: "Excellent career choice! We have two specialized courses: Security Operations Center Analyst 1 (3-4 months, Intermediate level) teaches you to become a cyber defender, and SOC Analyst 2 (4-5 months, Advanced) for advanced threat hunting..."

---

## 🌐 Browser Compatibility

### Voice Input (Speech Recognition):
- ✅ Chrome/Edge (full support)
- ✅ Safari (iOS 14.5+)
- ⚠️ Firefox (limited support)

### Voice Output (Text-to-Speech):
- ✅ All modern browsers

---

## 🔒 Security Notes

1. **API Key Security**: Your Groq API key is stored in `.env.local` and never exposed to the client
2. **Server-Side Calls**: All AI requests go through your Next.js API route (`/api/chat`)
3. **Rate Limiting**: Consider adding rate limiting in production
4. **Cost Management**: Monitor your Groq API usage in their dashboard

---

## 🎨 Customization

### Change AI Personality:
Edit `/app/api/chat/route.ts` and modify the `systemMessage.content`

### Add More Courses:
Update the course list in the system message with your actual offerings

### Adjust Voice Settings:
Modify speech rate, pitch, and volume in `/app/assistant/page.tsx` (lines 98-101)

---

## 🐛 Troubleshooting

### Voice input not working?
- Ensure you're using HTTPS or localhost
- Check browser permissions for microphone
- Try Chrome/Edge for best compatibility

### AI not responding?
- Check browser console for errors
- Verify `.env.local` file exists with correct API key
- Ensure dev server was restarted after adding `.env.local`

### No voice output?
- Check if voice output is enabled (speaker icon should show Volume2)
- Verify browser supports Web Speech API
- Check system volume settings

---

## 📊 Monitoring

To see AI responses in action:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Send a message
4. Check the `/api/chat` request to see the AI's full response

---

## 🚀 Next Steps

Consider adding:
- [ ] Conversation history persistence (localStorage or database)
- [ ] User authentication to save conversations
- [ ] Analytics to track popular questions
- [ ] Multi-language support
- [ ] Integration with course enrollment system

---

## 📞 Support

For issues or questions about the AI assistant:
- Check browser console for error messages
- Review the API route in `/app/api/chat/route.ts`
- Test API directly: https://api.groq.com/

**Your AI Course Advisor is now ready to help students find their perfect cybersecurity course!** 🎓🔒

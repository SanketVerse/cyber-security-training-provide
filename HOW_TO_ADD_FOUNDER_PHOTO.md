# 📸 How to Add Founder Photo

## 🎯 **Quick Steps to Make Founder Photo Visible**

### **Method 1: Add Your Own Photo (Recommended)**

1. **Get Dr. Kundankumar Saraf's photo** (JPG, PNG, or WebP format)
2. **Rename it to:** `founder-photo.jpg`
3. **Place it in:** `/public/founder-photo.jpg`
4. **Uncomment the Image code** in `/app/founder/page.tsx` (lines 53-61)
5. **Comment out the placeholder** (lines 44-52)

### **Method 2: Use a Professional Avatar Service**

Replace the image src with a professional avatar:

```tsx
<Image
  src="https://ui-avatars.com/api/?name=Dr+Kundankumar+Saraf&size=400&background=3b82f6&color=fff&font-size=0.4"
  alt="Dr. Kundankumar Saraf"
  fill
  className="object-cover"
  priority
/>
```

### **Method 3: Use Gravatar (if email has Gravatar)**

```tsx
<Image
  src="https://www.gravatar.com/avatar/[MD5_HASH_OF_EMAIL]?s=400&d=identicon"
  alt="Dr. Kundankumar Saraf"
  fill
  className="object-cover"
  priority
/>
```

---

## 📁 **File Structure**

```
cyber-secure-academy/
├── public/
│   ├── founder-photo.jpg  ← Add photo here
│   └── ...
└── app/
    └── founder/
        └── page.tsx       ← Edit this file
```

---

## 🔧 **Current Status**

✅ **Placeholder Active:** Shows "KS" initials with gradient background
❌ **Photo Missing:** `/public/founder-photo.jpg` not found
🔄 **Ready to Replace:** Code is prepared for easy photo addition

---

## 📝 **Code Changes Needed**

**In `/app/founder/page.tsx`:**

1. **Comment out lines 44-52** (placeholder)
2. **Uncomment lines 53-61** (Image component)
3. **Ensure photo exists** at `/public/founder-photo.jpg`

---

## 🎨 **Photo Requirements**

- **Format:** JPG, PNG, or WebP
- **Size:** Minimum 400x400px (square recommended)
- **Quality:** High resolution for professional appearance
- **Background:** Any (will be cropped to circle)

---

## 🚀 **After Adding Photo**

1. **Refresh browser** to see changes
2. **Test on mobile** for responsive display
3. **Check loading speed** (optimize if needed)

**The placeholder will automatically be replaced with the actual photo!** 📸✨

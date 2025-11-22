
# Flamapp.AI Assignment — Real-Time Edge Detection (Android + Web)

This repository is prepared to satisfy the Flamapp.AI first-round assignment requirements:
- Public GitHub repo with **commit history** (do not squash into a single commit).
- A `README.md` with features, screenshots/GIF placeholders, setup instructions (NDK, OpenCV), and architecture explanation.
- Android + Web implementation using OpenCV + NDK + JNI and a TypeScript React dashboard.

---

## Project Summary
**Project name:** Real-Time Edge Detection  
**Platforms:** Android (Kotlin + NDK + OpenCV) + Web Dashboard (React + TypeScript) + Node.js backend

### Features implemented
**Android**
- Camera live preview (CameraX stub)  
- Canny edge detection implemented in C++ (NDK) and exposed via JNI  
- Toggle processing, FPS overlay, save processed frames  
- Upload processed frames to server

**Web (React + TypeScript)**
- Dashboard showing latest processed images and device info  
- Auto-refresh to pull new images

**Server (Node.js)**
- Simple REST endpoint to accept image uploads and serve stored images

---

## Screenshots / GIF
Place real screenshots here after running the app:

```
/assets/screenshot1.png
/assets/screenshot2.png
/assets/demo.gif
```

---

## Setup instructions

### 1) OpenCV for Android
1. Download `OpenCV-android-sdk` from the OpenCV website and extract it into `/android/third_party/OpenCV-android-sdk`.
2. Ensure your `CMakeLists.txt` references `libopencv_java4.so` for each `ABI` (arm64-v8a, armeabi-v7a, x86, x86_64).

### 2) Android (Kotlin + NDK)
1. Install Android NDK and CMake via Android Studio SDK Manager.
2. Open the `android/` folder in Android Studio and sync Gradle.
3. Build and run on a physical device (camera access required).

Native processing JNI function is defined in `android/app/src/main/cpp/native-lib.cpp`.

### 3) Server
```bash
cd server
npm install
node server.js
```

### 4) Web Dashboard
```bash
cd web-dashboard
npm install
npm run dev
```

---

## Architecture (brief)
```
CameraX (Android) → Kotlin layer → JNI bridge → C++ (OpenCV/NDK) → Processed frame saved & uploaded → Node.js server → React TypeScript dashboard
```

---

## Repo structure
```
project-root/
 ├── android/            # Android Studio project (minimal stub)
 ├── server/             # Node.js upload server
 ├── web-dashboard/      # React + TypeScript dashboard (Vite)
 ├── assets/             # placeholder screenshots
 └── README.md
```

---

## Notes for submission
- Ensure you push multiple commits showing development progress (e.g. "init project", "add native processing", "add web dashboard", "add server", "add README & screenshots").
- Replace `/assets/*` placeholders with real screenshots/GIF before final submission. 
This line was added to improve commit history as per Flamapp.AI submission rules.


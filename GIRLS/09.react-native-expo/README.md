# Mobile App Development

[todo](https://github.com/shehza-d/teaching-web-at-SMIT-B11/tree/main/10.React)

## React Native Expo

Command:

```bash
npx create-expo-app  .  --template blank@54
```

Run this command inside a folder with URL-friendly name.

<details>
  <summary>URL-friendly characters</summary>

### ✅ Allowed

- letters (a-z)
- numbers (0-9)
- hyphen (-)

### ❌ Not allowed

- spaces
- dots
- special symbols

So instead of:

```bash
01. My Folder
```

Use:

```bash
01-my-folder
```

</details>

---

- Official Documentation: https://docs.expo.dev/tutorial/introduction/

### [Prerequisites](https://docs.expo.dev/tutorial/create-your-first-app/#prerequisites)

- [Expo Go App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)
- [NodeJs](https://nodejs.org/dist/v24.16.0/node-v24.16.0-x64.msi)

### [Run the app](https://docs.expo.dev/tutorial/create-your-first-app/#run-the-app-on-mobile-and-web)

```bash
npx expo start
```

r -> reload
w -> output web per dekhne ky liye

---

## Exporting APK

You can generate an APK without publishing using Expo.

Best simple method: **EAS Build (recommended)**

### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

### 2. Login

```bash
eas login
```

continue with github

### 3. Inside your project

```bash
eas build:configure
```

### 4. Build APK (not Play Store, just file)

```bash
eas build -p android --profile preview
```

- ✔ Generate a new Android Keystore? **`Yes`**
- ✔ Install and run the Android build on an emulator? **`NO`**

### 5. After build

- It gives you a download link
- You download `.apk` file directly
- Install on any Android phone

---

## Important setup (one-time)

Make sure your `eas.json` has this:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

---

## Recommendation for your teaching

Use **EAS Build APK method** because:

- no Android Studio needed
- works on any laptop
- students just install APK

If you want, I can give you a “teacher-ready 5-step script” you can literally copy-paste in class.

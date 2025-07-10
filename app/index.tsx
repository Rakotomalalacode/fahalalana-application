import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { LoadingView } from "./LoadingView";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://fahalalana-plus.vercel.app/auth/signin" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={() => <LoadingView />}
        scalesPageToFit={false}
        contentMode="mobile"
        injectedJavaScript={`
          (function() {
            var existing = document.querySelector('meta[name="viewport"]');
            if (existing) {
              existing.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            } else {
              var meta = document.createElement('meta');
              meta.setAttribute('name', 'viewport');
              meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
              document.head.appendChild(meta);
            }
          })();
          true;
        `}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// import React from "react";
// import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
// import { WebView } from "react-native-webview";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <WebView
//         source={{ uri: "https://fahalalana-plus.vercel.app/auth/signin" }} 
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         startInLoadingState={true}
//         injectedJavaScript={`
//           const meta = document.createElement('meta');
//           meta.setAttribute('name', 'viewport');
//           meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
//           document.head.appendChild(meta);
//         `}
//         scalesPageToFit={false}
//         contentMode="mobile"
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
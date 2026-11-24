import { useMemo, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import type { WebViewNavigation } from "react-native-webview";

function configuredUrl() {
  const fromEnv = process.env.EXPO_PUBLIC_APP_URL;
  const fromExtra = Constants.expoConfig?.extra?.appUrl;
  const raw = (typeof fromEnv === "string" && fromEnv) || (typeof fromExtra === "string" && fromExtra) || "";
  return raw.trim();
}

import { isAllowed, isStartUrl } from "./policy";

export default function App() {
  const startUrl = useMemo(() => configuredUrl(), []);
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState("");
  const ready = isStartUrl(startUrl);

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      {!ready ? (
        <View style={styles.message}>
          <Text style={styles.title}>Нет адреса сайта</Text>
          <Text style={styles.text}>
            В mobile/app.json в поле extra.appUrl вставьте постоянную ссылку опубликованного сайта. Либо задайте EXPO_PUBLIC_APP_URL. Разрешён только https.
          </Text>
        </View>
      ) : (
        <WebView
          source={{ uri: startUrl }}
          style={styles.web}
          originWhitelist={["https://*", "mailto:*", "tel:*"]}
          mixedContentMode="never"
          javaScriptEnabled
          domStorageEnabled
          setSupportMultipleWindows={false}
          allowsBackForwardNavigationGestures
          startInLoadingState
          cacheEnabled
          thirdPartyCookiesEnabled={false}
          sharedCookiesEnabled={false}
          androidLayerType="hardware"
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onShouldStartLoadWithRequest={(request: WebViewNavigation) => {
            if (isAllowed(request.url)) {
              setBlocked("");
              return true;
            }
            setBlocked(request.url);
            return false;
          }}
          renderLoading={() => (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0c6b52" />
            </View>
          )}
        />
      )}
      {loading && ready && (
        <View style={styles.bar} pointerEvents="none">
          <ActivityIndicator color="#0c6b52" />
        </View>
      )}
      {blocked !== "" && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Ссылка заблокирована: разрешён только https.</Text>
          <Pressable onPress={() => setBlocked("")}>
            <Text style={styles.bannerBtn}>Закрыть</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#f3efe6", paddingTop: Constants.statusBarHeight },
  web: { flex: 1, backgroundColor: "#fffdf8" },
  loader: { ...StyleSheet.absoluteFill, alignItems: "center", justifyContent: "center", backgroundColor: "#f3efe6" },
  bar: { position: "absolute", top: Constants.statusBarHeight + 8, alignSelf: "center" },
  message: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12, color: "#1c1915" },
  text: { fontSize: 16, lineHeight: 24, color: "#5e574c" },
  banner: { padding: 12, backgroundColor: "#fff4e5" },
  bannerText: { color: "#8a4b08", fontWeight: "700" },
  bannerBtn: { marginTop: 8, color: "#0c6b52", fontWeight: "700" },
});

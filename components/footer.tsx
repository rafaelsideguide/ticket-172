import { MendableChatBubble } from "@mendable/search";

export default function Footer() {
  const style = { darkMode: false, accentColor: "#123456" }

  return (
    <footer>
      <p>footer</p>

      <MendableChatBubble
        anon_key="f6fb7f0e-e7ac-4b08-a531-da0ee6cd2cc1"
        style={style}
        showSimpleSearch
      />
    </footer>
  );
}


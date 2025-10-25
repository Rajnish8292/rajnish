import GlitchLoadText from "@/component/ui/GlitchLoadText/GlitchLoadText";
import "./LoadingPage.css";
export default function LoadingPage() {
  return (
    <div className="loading_page">
      <GlitchLoadText
        text={"LOADING ..."}
        onLoadAnimate
        duration={5}
        speed={15}
        coefficient={0.9}
      />
    </div>
  );
}

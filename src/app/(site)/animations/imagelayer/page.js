import Page from "@/components/Layout/Page";
import ImageLayer from "@/components/Animations/ImageLayer";

export const metadata = { title: "Rapid Image Layers" };

export default function ImageLayerPage() {
  return (
    <Page darkNav>
      <ImageLayer />
    </Page>
  );
}

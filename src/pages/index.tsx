import Asset from "@/components/PageAsset";
import Create from "@/components/PageCreate";
import Grid from "@/components/PageGrid";
import IMO from "@/components/PageIMO";
import Landing from "@/components/PageLanding";
import Sign from "@/components/PageSign";
import Team from "@/components/PageTeam";
import Text from "@/components/PageText";

export default function Home() {
  return (
    <>
      <Landing />
      <Create />
      <Asset />
      <Text />
      <Grid />
      <IMO />
      <Team />
      <Sign />
    </>
  );
}

import CelebrationPage from "../celebration-page"
import type { Metadata } from "next"

// Page-specific metadata that will override layout metadata if needed
export const metadata: Metadata = {
  title: "¡Felicidades Luc & Loli! 🌟 | The Constellation Camino Celebration",
  description:
    "Join us in celebrating Luc's journey as founder and Chair of The Constellation as well as his current Camino pilgrimage in Spain with Loli. From Burgos to Santiago - following their amazing adventure! 🚶‍♂️✨🌸",
}

export default function Page() {
  return <CelebrationPage />
}

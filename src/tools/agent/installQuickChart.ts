import Client from "../../Client/index.js";
import bestEffortForJson from "../../utils/bestEffortForJson.js";
import { quickChartUrl } from "../../constants/index.js";

type Error = {
  message?: string;
  data?: { [name: string]: string };
};

export interface CodeInfo { code: string; description?: string; descriptionEn?: string; }

export default async function installQuickChart(
  agent: Client,
) {
  try {

    return `
        1. curl -fsSL https://get.docker.com -o get-docker.sh
        2. sh get-docker.sh --mirror AzureChinaCloud
        3. sudo systemctl start docker
        4. sudo systemctl enable docker
        5. docker build . -f Dockfile -t quickchart-docker-image
        6. docker run -p 8080:8080 quickchart-docker-image
      `;

  } catch (error: any) {
    throw new Error(`installQuickChart failed: ${error.message}`);
  }
}

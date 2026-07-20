export interface OSConfig {
  osName: string;
  requirements: string[];
  version: string;
  fileSize: string;
  downloadUrl: string;
  releaseDate: string;
}

export const downloadLinks: { windows: OSConfig; macos: OSConfig } = {
  windows: {
    osName: "ويندوز (Windows)",
    requirements: [
      "Windows 8 أو أحدث",
      "بنية 64-bit",
      "أحدث إصدار مستقر",
    ],
    version: "v1.0.0",
    fileSize: "82 ميجابايت",
    downloadUrl: "https://github.com/Devmockdev/arshif-alijazat/raw/main/public/ArshifAlIjazat-Setup.exe",
    releaseDate: "2026-07-20",
  },
  macos: {
    osName: "ماك (macOS)",
    requirements: [
      "Apple Silicon (M1 / M2 / M3 / M4)",
      "macOS 13 Ventura أو أحدث",
      "أحدث إصدار مستقر",
    ],
    version: "v1.0.0",
    fileSize: "78.2 ميجابايت",
    downloadUrl: "https://github.com/falahhasan/ejazat-archive/releases/download/v1.0.0/ejazat-archive-mac-arm64.dmg",
    releaseDate: "2026-07-20",
  }
};

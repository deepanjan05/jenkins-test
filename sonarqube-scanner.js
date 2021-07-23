const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://3.220.0.132:9000",
        token: "98d872640c731cc8ce3291927006246f6ed40642",
        options: {
            "sonar.projectKey": "react-app-dev",
            "sonar.projectName": "react-sonar",
            "sonar.projectVersion": "1.0",
            "sonar.sources": "./src",
            "sonar.exclusions": "**/node_modules/**, **/coverage/**, **/public/**, **/build/**, **/__tests__/**",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            //"sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            //"sonar.testExecutionReportPaths": "test-report.xml"
        },
    },
    () => process.exit()
);
const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        login: "admin",
        token: "976906ee6b5d638151a6bf1a4bac8053c80421d3",
        options: {
            "sonar.sources": "./src",
            //"sonar.exclusions": "**/*.test.tsx",
            "sonar.tests": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.testExecutionReportPaths": "test-report.xml"
        },
    },
    () => process.exit()
);
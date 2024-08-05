// airpollution.js
import React from "react";

export function airpollution() {
    return {
        date: "1 March 2023",
        title: "Air Pollution and Economic Development in Colombia",
        description:
            "Explore the intricate relationship between air pollution and economic development in Colombia through the lens of the Environmental Kuznets Curve (EKC) hypothesis.",
        keywords: [
            "Air Pollution and Economic Development",
            "Environmental Kuznets Curve",
            "EKC",
            "Colombia",
        ],
        style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
				}
				`,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <h2>Intro/Hook</h2>
                    <p>
                        The Environmental Kuznets Curve (EKC) provides a compelling framework for understanding the
                        intricate relationship between economic growth and environmental degradation. According to the
                        EKC hypothesis, as a nation begins to develop economically, environmental degradation initially
                        increases. London showed an inverted-U shape relationship between air pollution and economic
                        development, showing the increase until peaking at 1891, and the decreasing trend from onward.
                    </p>
                    <p>
                        <ul>
                            <li>Can the same inverted-U shape be observed in developing countries as in London?</li>
                            <li>In the United States, air pollution disproportionately affects disadvantaged
                                populations. Do we see the same environmental justice issues in Colombia?
                            </li>
                        </ul>
                    </p>
                    <iframe
                        src="../airpollution/Poster%20Assets/Air%20Pollution%20vs%20GDP%20Per%20Capita%20in%20London%20(1700-2015).html"
                        title="Air Pollution vs GDP Per Capita in London (1700-2015)"
                        width="800"
                        height="600"
                        style={{border: "none"}}
                    ></iframe>
                    <h2>Basics about Colombia</h2>
                    <p>
                        - Colombia is a middle-income country with a growing economy. Compared to the rest of the world,
                        Colombia suffers from high levels of air pollution.
                        - In 2018, the global median PM 2.5 value was 12.8, while the median PM 2.5 value in Colombia
                        was 18. Exposure to air pollutants like PM 2.5 can cause respiratory diseases and have serious
                        health consequences [4].
                        - Poor air quality can also impact economic activity by reducing worker productivity, increasing
                        healthcare costs, and reducing tourism [5].
                        - In 2018, Colombia's GDP was $334.2 billion, making it the fourth-largest economy in South
                        America [6].
                    </p>
                    <div className="responsive-iframe-container">
                        <iframe
                            src="../airpollution/Poster Assets/GlobalAnimated-ezgif.com-resize.gif"
                            title="Air Pollution vs GDP Per Capita in London (1700-2015)"
                            className="responsive-iframe"
                        ></iframe>
                    </div>

                    <h2>Data Involved</h2>
                    <p>
                        - Annual Mean Surface PM2.5 [ug/m3] at 0.01° × 0.01° [7]
                        - Colombia 2018 Census [8]
                        - Colombia Departmental GDP [9]
                        - USGS GTOPO30 Elevation [10]
                    </p>

                    <h2>Methods</h2>
                    <p>We analyzed how changes in air pollution relate to GDP over time by examining their spatial patterns.
                        We found that air pollution shows a strong tendency to cluster in certain areas (local Moran’s I </p>
                    <h2>Trends Discovered</h2>
                    <h3>Inverted U Shape</h3>

                    <h3>What about Altitude?</h3>

                    <h2>Inequalities</h2>

                    <h2>References</h2>
                </div>
            </React.Fragment>
        ),
    };
}

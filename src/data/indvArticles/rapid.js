// rapid.js
import React from "react";

export function rapid() {
    return {
        date: "20 July 2023",
        title: "RAPID: An Innovative Solution for Low-Cost On-Demand Plant Stress Measurement",
        description:
            "Discover how RAPID offers a groundbreaking approach to measure plant stress with low cost and high resolution, using advanced UAV technology.",
        keywords: [
            "Plant Stress Measurement",
            "NDVI",
            "Thermal Imaging",
            "UAV",
            "Remote Sensing",
            "RAPID"
        ],
        style: `
            .article-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `,
        body: (
            <React.Fragment>
                <div className="article-content">
                    <h2>Authors and Institution</h2>
                    <p>
                        This work was conducted by Haorui Zhou, UC Santa Barbara, Juliana Karl, University of Iowa, and
                        Justin Crevier, Boise State University at the <a href="https://edgeofspace.sites.uiowa.edu"
                                                                         target="_blank" rel="noopener noreferrer">Edge
                        of Space Academy at the University of Iowa</a>.
                    </p>

                    <h2>Introduction</h2>
                    <p>
                        Once covering an estimated 30 million acres, Iowa prairies have been reduced to 0.1% of their
                        original cover. The University of Iowa is currently restoring the Ashton Prairie. As global
                        temperatures rise, plants face new challenges. Our project goal: Can we develop a lower-cost,
                        higher-resolution, on-demand method of acquiring the data needed to determine NDVI and thermal
                        characteristics for a sample population?
                    </p>

                    <h2>Background</h2>
                    <p>
                        There are many ways to evaluate plant stress. In this study, we use temperature and the
                        Normalized Difference Vegetation Index (NDVI). Temperature can indicate plant stress; when
                        stressed, plants limit water loss by closing stomata. Plant health can be monitored via the
                        reflectance of near-infrared (NIR) radiation. Unmanned Aerial Systems (UAS) equipped with
                        Red/Green/Blue (RGB) and NIR cameras may offer a more cost-effective remote sensing solution
                        than traditional aircraft or satellites. NDVI, a ratio of Red and NIR bands, has been used to
                        evaluate plant health.
                    </p>

                    <h2>Hardware</h2>
                    <p>
                        We used a DJI Matrice 300 RTK UAS, with an onboard LiDAR/RGB camera, as our payload platform.
                        The Raspberry Pi Camera Module 2 No-IR (No Infrared Filter), with an attached blue filter,
                        captured RG (Red/Green) + NIR data. The Lepton 3.5 Thermal Camera was used to capture raw
                        thermal sensor values. We designed a 3D-printed modular housing for the onboard power source,
                        Raspberry Pi computer, and dual-mounted cameras. The total payload mass was 440 grams.
                        <img
                            src="/rapid/drone.png"
                            alt="random"
                            width={500}
                            className={"centered-image"}
                        />
                    </p>

                    <h2>Data</h2>
                    <p>
                        On Thursday, July 20, 2023, we flew a DJI Matrice 300 RTK UAS at an altitude of 40 feet. We
                        merged our acquired datasets to build high-resolution images of the prairie and computed NDVI
                        data from the RG+NIR images to evaluate indicators of plant stress and growth. Plant stress was
                        identified through the observation of lower NDVI values and higher temperatures.
                    </p>

                    <h2>Results</h2>
                    <p>
                        Our system demonstrated the capability to capture RG+NIR and thermal data at a 40-foot altitude.
                        Some plants in Ashton Prairie showed signs of stress. The stressed area (green rectangle) in the
                        above maps shows that stressed plants have lower NDVI and higher surface temperatures. Our
                        system's resolution is 1 cm/pixel for RG+NIR and 27 cm/pixel for thermal, whereas Landsat9 has a
                        resolution of 30 m/pixel for RGB and 100 m/pixel for thermal. While Landsat9 revisits the same
                        location every 8 days, our system can capture data on demand. Although we succeeded in creating
                        a system with higher resolution and on-demand data capture, the ability to fuse NDVI and thermal
                        data still needs improvement.
                    </p>

                    <h2>Limitations</h2>
                    <p>
                        Wind significantly impacted remote sensing imagery, as gusts caused blurry images. Our cameras
                        did not register enough of our deployed ground control points to aid in the georeferencing
                        process. The vegetation of Ashton Prairie is fairly homogeneous; further study is needed to
                        improve the expandability of our system.
                    </p>

                    <h2>Acknowledgements</h2>
                    <p>
                        We want to thank our mentors Susan Meerdink, Allison Jaynes, and Adam Skibbe, along with our drone pilot Mary De La Garza. We also thank the University of Iowa Office of the Vice President for Research for funding our project.
                    </p>

                    <h2>References</h2>
                    <p>
                        <p>
                            <a href="https://naturalresources.extension.iastate.edu/encyclopedia/prairie-restoration-habitat-headquarters"
                               target="_blank" rel="noopener noreferrer">Prairie Restoration - Habitat
                                Headquarters</a><br/>
                            Tanner, C.B., 1963. Plant Temperatures 1. Agronomy Journal 55, 210–211. <a
                            href="https://doi.org/10.2134/agronj1963.00021962005500020043x" target="_blank"
                            rel="noopener noreferrer">https://doi.org/10.2134/agronj1963.00021962005500020043x</a><br/>
                            Peñuelas, J., Filella, I., 1998. Visible and near-infrared reflectance techniques for
                            diagnosing plant physiological status. Trends in Plant Science 3, 151–156. <a
                            href="https://doi.org/10.1016/S1360-1385(98)01213-8" target="_blank"
                            rel="noopener noreferrer">https://doi.org/10.1016/S1360-1385(98)01213-8</a><br/>
                            Manfreda, S., McCabe, M., Miller, P., Lucas, R., Pajuelo Madrigal, V., Mallinis, G., Ben
                            Dor, E., Helman, D., Estes, L., Ciraolo, G., Müllerová, J., Tauro, F., De Lima, M., De Lima,
                            J., Maltese, A., Frances, F., Caylor, K., Kohv, M., Perks, M., Ruiz-Pérez, G., Su, Z., Vico,
                            G., Toth, B., 2018. On the Use of Unmanned Aerial Systems for Environmental Monitoring.
                            Remote Sensing 10, 641. <a href="https://doi.org/10.3390/rs10040641" target="_blank"
                                                       rel="noopener noreferrer">https://doi.org/10.3390/rs10040641</a><br/>
                            Gandhi, G.M., Parthiban, S., Thummalu, N., Christy, A., 2015. Ndvi: Vegetation Change
                            Detection Using Remote Sensing and Gis – A Case Study of Vellore District. Procedia Computer
                            Science 57, 1199–1210. <a href="https://doi.org/10.1016/j.procs.2015.07.415" target="_blank"
                                                      rel="noopener noreferrer">https://doi.org/10.1016/j.procs.2015.07.415</a><br/>
                            <a href="https://landsat.gsfc.nasa.gov/satellites/landsat-9/landsat-9-overview/"
                               target="_blank" rel="noopener noreferrer">Landsat 9 Overview</a>
                        </p>
                    </p>
                </div>
            </React.Fragment>
        ),
    };
}

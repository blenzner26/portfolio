import React from "react";
import { Helmet } from "react-helmet";
import Fade from '@material-ui/core/Fade';
import undraw_resume from '../imgs/undraw_resume.svg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';

const styles = {
    hr: {
        borderColor: '#1F50FF',
        width: '15%',
        height: '1px',
        background: '#1F50FF',
        marginTop: '30px',
    },
};

function Experience(props) {

    return (
        <div>
            <Helmet>
                <title>Experience | Brendan Lenzner</title>
                <meta name="description" content="Front-End Web Developer, WordPress, React Developer" />
            </Helmet>

            <div className="experience">
            <Fade in={true}>
                    <h2 className="page-title">Experience</h2>
                </Fade>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#1F50FF', color: '#fff' }}
                        date="Sep 2020 - present"
                        iconStyle={{ background: '#1F50FF', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web &amp; Digital Scholarship Technologies Librarian</h3>
                        <h4 className="vertical-timeline-element-subtitle">Marquette University | Milwaukee, WI</h4>
                        <p>Web Development, Web Accessibility, OU Campus, Digital Scholarship, Augmented Reality (AR), 3D Printing, WordPress, Drupal, Data Visualization</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="August 2020"
                        iconStyle={{ background: '#53960B', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">M.S. Information Science &amp; Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">UW-Milwaukee | Milwaukee, WI</h4>
                        <p>Focus on web and mobile development</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Nov 2017 - Jun 2020"
                        iconStyle={{ background: '#1F50FF', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Front-End Web Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">UW-Milwaukee | Milwaukee, WI</h4>
                        <p>Web Development, WordPress, User Experience, Visual Design, Web Accessibility</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Aug 2018 - May 2020"
                        iconStyle={{ background: '#1F50FF', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Teaching Assistant | School of Information Studies</h3>
                        <h4 className="vertical-timeline-element-subtitle">UW-Milwaukee | Milwaukee, WI</h4>
                        <p>
                            Ethical Hacking, Web App Development, Cisco Networking, Information Security</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="May 2018"
                        iconStyle={{ background: '#53960B', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">B.S. Information Science &amp; Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">UW-Milwaukee | Milwaukee, WI</h4>
                        <p>Certificate in Web Development</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2017 - May 2018"
                        iconStyle={{ background: '#1F50FF', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">nonProf-IT Internship</h3>
                        <h4 className="vertical-timeline-element-subtitle">Milwaukee, WI</h4>
                        <p>Web Development, WordPress, User Experience, Visual Design</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: '#252525', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
            <hr style={styles.hr} />
            <Fade in={true}>
                <div className="skills-img"><img src={undraw_resume} alt="resume graphic" /></div>
            </Fade>
        </div>
    )
}

export default Experience;
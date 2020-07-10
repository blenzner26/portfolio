import React from "react";
import { Helmet } from "react-helmet";
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';
import undraw_resume from '../imgs/undraw_resume.svg';

const styles = {
    bar: {
        marginTop: "30px",
    },
    add_skills: {
        marginTop: "40px",
    },
    hr: {
        borderColor: '#1165eb',
        width: '15%',
        height: '1px',
        background: '#1165eb',
        marginTop: '50px',
    },
    chip: {
        border: '2px solid rgb(17, 101, 175)',
        color: '#ffffff',
        padding: '10px',
        margin: '10px',
    }
};

function Skills(props) {

    const [progress_HTML, setProgress] = React.useState(0);

    const [progress_wordpress, setProgress3] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress3(() => {

                const diff = 95;
                return diff;
            });
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(() => {

                const diff = 90;
                return diff;
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const [progress_CSS, setProgress2] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress2(() => {

                const diff = 85;
                return diff;
            });
        }, 300);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const [progress_js, setProgress4] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress4(() => {

                const diff = 60;
                return diff;
            });
        }, 400);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const [progress_react, setProgress5] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress5(() => {

                const diff = 45;
                return diff;
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Helmet>
                <title>Skills | Brendan Lenzner</title>
                <meta name="description" content="Front-End Web Developer, WordPress, React Developer" />
            </Helmet>

            <div className="skils">
                <Fade in={true}>
                    <h2 className="page-title">Skills</h2>
                </Fade>
                <div className="row">
                    <div className="col-sm-2">
                        <strong><p>WordPress</p></strong>
                    </div>
                    <div className="col-sm-10">
                        <LinearProgress style={styles.bar} className="wordpress_bar" variant="determinate" value={progress_wordpress} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <strong><p>HTML5</p></strong>
                    </div>
                    <div className="col-sm-10">
                        <LinearProgress style={styles.bar} className="html_bar" variant="determinate" value={progress_HTML} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <strong><p>CSS3</p></strong>
                    </div>
                    <div className="col-sm-10">
                        <LinearProgress style={styles.bar} className="css_bar" variant="determinate" value={progress_CSS} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2">
                        <strong><p>JavaScript</p></strong>
                    </div>
                    <div className="col-sm-10">
                        <LinearProgress style={styles.bar} className="js_bar" variant="determinate" value={progress_js} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <strong><p>React.js</p></strong>
                    </div>
                    <div className="col-sm-10">
                        <LinearProgress style={styles.bar} className="react_bar" variant="determinate" value={progress_react} />
                    </div>
                </div>
                <Fade in={true}>
                    <div style={styles.add_skills}>
                        <h3>Additonal Skills</h3>
                        <Chip style={styles.chip} label="Adobe Photoshop" variant="outlined" /> <Chip style={styles.chip} label="Adobe XD" variant="outlined" /> <Chip style={styles.chip} label="PHP" variant="outlined" /> <Chip style={styles.chip} label="Python" variant="outlined" /> <Chip style={styles.chip} label="SQL" variant="outlined" /> <Chip style={styles.chip} label="Bootstrap" variant="outlined" /> <Chip style={styles.chip} label="Google Analytics" variant="outlined" /> <Chip style={styles.chip} label="Java" variant="outlined" />
                    </div>
                </Fade>
            </div>
            <hr style={styles.hr} />
            <Fade in={true}>
                <div className="skills-img"><img src={undraw_resume} alt="resume graphic" /></div>
            </Fade>
        </div>
    )
}

export default Skills;
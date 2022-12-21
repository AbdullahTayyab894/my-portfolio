import { Box } from "@mui/system";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from 'react'
import { Typography } from "@mui/material";

const percentage1 = 100;
const percentage2 = 90;
const percentage3 = 70;
const CircularSkillBar = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            padding:"20px"
        }}>
            <Box sx={{
                width: "50px",
                height: "50px"
            }}>
                <CircularProgressbar value={percentage1} text={`${percentage1}%`} styles={buildStyles({
                       textColor: "white",
                       pathColor: "brown",
                       trailColor: "white",
                })} />
                <Typography>Panjabi</Typography>
            </Box>
            <Box sx={{
                width: "50px",
                height: "50px"
            }}>
                <CircularProgressbar value={percentage2} text={`${percentage2}%`} styles={buildStyles({
                      textColor: "white",
                      pathColor: "brown",
                      trailColor: "white",
                })} />
                <Typography>Urdu</Typography>
            </Box>
            <Box sx={{
                width: "50px",
                height: "50px"
            }}>
                <CircularProgressbar value={percentage3} text={`${percentage3}%`} styles={buildStyles({
                    textColor: "white",
                    pathColor: "brown",
                    trailColor: "white",
                })} />
                <Typography>English</Typography>
            </Box>
        </div>
    )
}

export default CircularSkillBar  
import React, { Component } from "react";

import classes from "./details.module.scss";
import ExperienceModel from "../model/experienceModel";
import cx from "classnames";

interface ExperienceProps {
  experience: ExperienceModel;
}

class Experience extends Component<ExperienceProps> {
  render() {
    return (
      <div className={classes.edHolder}>
        <div className={`${classes.companyIcon}`}>
          <img
            src={"./images/" + this.props.experience.icon}
            className="mb-2 mt-2"
            alt={this.props.experience.firm}
          />
        </div>
        <div className={cx([classes.fontsSize, classes.summary])}>
          <div className={`${classes.gray} mb-1 font-weight-bolder`}>
            {this.props.experience.firm}
          </div>
          <div className="mb-1">
            <span className={`${classes.gray} font-weight-bold`}>
              {this.props.experience.position}
            </span>
            &nbsp;&nbsp;
            <span>{this.props.experience.location}</span>
          </div>
          <div className="text-secondary">
            {this.props.experience.startDate} - {this.props.experience.endDate}
          </div>
          {/*<div className='text-secondary'>*/}
          {/*    {this.props.experience.location}*/}
          {/*</div>*/}
        </div>
        <div className={cx([classes.fontsSize, classes.details])}>
          {/*<hr className={classes.lighterHr} />*/}
          {this.props.children}

          {/*{this.props.experience.showLine? (<hr/>): null}*/}
        </div>
      </div>
    );
  }
}

export default Experience;

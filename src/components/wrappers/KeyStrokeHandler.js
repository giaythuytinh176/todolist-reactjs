import React, { Component } from "react";
import { getNextModeByKey } from "../../services/mode";
import { wrapChildrenWith } from "../../util/common";

class KeyStrokeHandler extends Component {
    componentWillMount() {
        window.addEventListener("keydown", this.handleKeyUp.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyUp);
    }

    handleKeyUp(e) {
        const { mode } = this.props.data;
        const nextMode = getNextModeByKey(mode, e.keyCode);
        console.log("this.props", this.props);
        console.log("nextMode", nextMode);

        if (nextMode !== mode) {
            e.preventDefault();
            this.props.actions.changeMode(nextMode);
        }
    }

    render() {
        console.log("2", this);
        return <div>{wrapChildrenWith(this.props.children, this.props)}</div>;
    }
}

export default KeyStrokeHandler;

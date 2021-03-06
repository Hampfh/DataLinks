import React, { Component } from "react"
import { connect } from "react-redux"

import { IReduxRootState } from "state/reducers"
import RenderData from "components/templates/content_rendering/RenderData"
import { SubjectData } from '../Subjects'

import "./SneakPeak.css"
import { IAppState } from "state/reducers/app"
import { hideSneakPeak, IHideSneakPeak, ISetSneakPeakSelectionCount, IShowSneakPeak, setSneakPeakSelectionCount, showSneakPeak } from '../../../../state/actions/app'
import { IDimensionState } from "state/reducers/dimensions"

class SneakPeak extends Component<PropsForComponent, StateForComponent> {

	constructor(props: PropsForComponent) {
		super(props)

		this.state = {
			eventsAllowed: false
		}
	}

	_mouseEnter = () => {
		this.props.setSneakPeakSelectionCount(1)
	}

	_mouseLeave = () => {
		this.props.setSneakPeakSelectionCount(-1)
	}

	render() {
		if (this.props.app.sneakPeak?.group == null) {
			console.warn("Subject " + this.props.app.sneakPeak?.name + " has no root")
			return null;
		}

		return (
			<div 
				className="SneakPeakWrapper" 
				style={{
					height: this.props.dimensions.content.height
				}}
				onMouseEnter={this._mouseEnter}
				onMouseLeave={this._mouseLeave}
			>
				<div className="ContentContainer"
					style={{
						maxHeight: this.props.dimensions.content.height - 50,
					}}
				>
					<RenderData 
						updateSubjects={this.props.updateSubjects}
						group={(this.props.app.sneakPeak as SubjectData).group}
					/>
				</div>
			</div>
		)
	}
}

export interface PropsForComponent {
	showSneakPeak: IShowSneakPeak,
	hideSneakPeak: IHideSneakPeak,
	updateSubjects: () => void,
	setSneakPeakSelectionCount: ISetSneakPeakSelectionCount,
	app: IAppState,
	dimensions: IDimensionState
}

export interface StateForComponent {
	eventsAllowed: boolean
}

const reduxSelect = (state: IReduxRootState) => {
	return {
		app: state.app,
		dimensions: state.dimensions
	}
}

const reduxDispatch = () => {
	return {
		setSneakPeakSelectionCount,
		showSneakPeak,
		hideSneakPeak
	}
}

export default connect(reduxSelect, reduxDispatch())(SneakPeak)
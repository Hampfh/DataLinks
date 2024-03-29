/**
 * This file is responsible for the layout 
 * and distribution of all elements in the
 * subjects view. This file also sorts all
 * contentobjects provided by the database
 * and sorts them into their corresponding
 * modules. Aka sending all data belonging
 * to the text type to the text component
 * and vise verse for all other component-
 * types.
 * 
 * This is done by recursibly dive into the 
 * provided root object.
 */

import { useState } from 'react'
import { connect } from "react-redux"

import GroupForm from "./GroupForm"
import "./RenderData.css"
import { IReduxRootState } from "state/reducers"
import { 
	addLocal, 
	deleteLocally, 
	editLocal, 
	IAddLocal, 
	IDeleteLocally, 
	IEditLocal 
} from "state/actions/local"
import { ILocalState } from "state/reducers/local"
import { IAppState } from "state/reducers/app"
import { onSubmitGroup } from 'functions/contentRequests'
import Group from './Group'
import { fetchUpdatedSubjects } from 'functions/updateSubjects'
import useStatusCodeEvaluator from 'functions/hooks/useStatusCodeEvaluator'

function RenderData(props: PropsForComponent) {

	const { actOnFailedRequest } = useStatusCodeEvaluator()

	const [newGroup, setNewGroup] = useState<{
		parentGroup: string,
		name: string,
		isSubGroup: boolean
	} | undefined>(undefined)

	async function submitGroup(name: string) {
		actOnFailedRequest(await onSubmitGroup(name, newGroup!))
		window.location.reload()
	}

	return (
		<div className="group-content-wrapper">
			<Group 
				group={props.group}
				ignoreGroups={props.ignoreGroups}
				updateSubjects={fetchUpdatedSubjects}
				contentFilter={props.contentFilter}
			/>
			{!props.ignoreGroups &&
				<GroupForm 
					forRoot
					parentId={props.group._id}
					newGroup={newGroup}
					createGroup={(isSubGroup: boolean) => setNewGroup({
						name: "",
						parentGroup: props.group._id,
						isSubGroup
					})}
					submitGroup={submitGroup}
				/>
			}
		</div>
	)
}

interface PropsForComponent {
	ignoreGroups?: boolean
	contentFilter?: (value: ContentObject, index: number, array: ContentObject[]) => boolean
	
	app: IAppState
	group: Group
	local: ILocalState
	deleteLocally: IDeleteLocally
	addLocal: IAddLocal
	editLocal: IEditLocal
	updateSubjects: () => void
}


const reduxSelect = (state: IReduxRootState) => ({
	app: state.app,
	local: state.local,
})

const reduxDispatch = () => ({
	addLocal,
	deleteLocally,
	editLocal
})

export default connect(reduxSelect, reduxDispatch())(RenderData);
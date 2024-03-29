import { ContentType } from "components/utilities/content_type"

export interface IAddLocal { (parentId: string, fieldOne: string, fieldTwo: string, fieldThree: string, type: ContentType, id?: string): void }
export const addLocal = (parentId: string, fieldOne: string, fieldTwo: string, fieldThree: string, type: ContentType, id?: string) => {
	return {
		type: 'ADD_LOCAL',
		payload: {
			parentId,
			fieldOne,
			fieldTwo,
			fieldThree,
			type,
			id
		}
	}
}

export interface IEditLocalObject {
	parentGroup: string,
	id: string,
	title?: string,
	text?: string,
	displayText?: string,
	link?: string,
	deadline?: string,
	start?: string
}
export interface IEditLocal { (id: string, object: Partial<IEditLocalObject>): void }
export const editLocal = (id: string, object: Partial<IEditLocalObject>) => {
	return {
		type: 'EDIT_LOCAL',
		payload: {
			id,
			object
		}
	}
}

export interface IDeleteLocally { (id: string): void }
export const deleteLocally = (id: string) => {
	return {
		type: 'DELETE_LOCALLY',
		payload: {
			id
		}
	}
}
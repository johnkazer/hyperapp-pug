/// <reference types="cypress" />
import { onlineMachine } from '../../src/machines.js'
import { getSimplePaths, getShortestPaths } from '@xstate/graph'
import { map, compose, pipe, lensPath, view, curry } from 'ramda'

const onlineSimplePaths = getSimplePaths(onlineMachine)
const onlineShortestPaths = getShortestPaths(onlineMachine)

const onlineStateList = Object.keys(onlineSimplePaths)
const machineName = lensPath(['tree', 'stateNode', 'config', 'id'])
const currentMachine = (state) => view(machineName, state) === 'onlineMachine' ? onlineMachine : null
const selectSimpleOnlinePaths = (currentState) => onlineSimplePaths[currentState].paths[0]
const reload = () => cy.reload()
const toggleOnlineStatus = () => cy.
const appIsReady = () => cy.get('p').contains('You are currently online').should('be.visible')
const checkTransition = ({ state, event }) => {
	cy.log(`checking transition from ${state.value} due to ${event.type}`)
	// if there are paths[x].state.actions[y] then have Hyperapp and XState run the action(s) for us
	// Optionally we could drive the machine from here too
	if (state.actions.length > 0) {
		cy.log(view(machineName, state))
		const machine = currentMachine(state)
		// machine.transition(...)
		return
	}
	// else run paths[x].event
	// add logic to check for DOM elements with id === paths[x].event
	return cy.get(`button[id="${event.type}"]`).click()
}
const listOfPaths = curry((selectPaths, currentState) => {
	cy.log(`List of paths state: ${currentState}`)
	return selectPaths(currentState)
})
const checkPath = (path) => map(checkTransition, path)

/*
it('tests each state path with forEach', () => {
    cy.visit('http://localhost:1234')
  
    videoStateList.forEach(currentState => {
		videoSimplePaths[currentState].paths.forEach(arr => arr.forEach(({ state, event }) => {
			cy.log(`checking transition from ${state.value} due to ${event.type}`)
		}))
	})
})
it('tests each state path with map', () => {
    cy.visit('http://localhost:1234')
  
    map(currentState => {
		map(arr => {
			map(checkTransition, arr)
		}, videoSimplePaths[currentState].paths)
		cy.reload()
    }, videoStateList)
})
*/
it('tests each state path', () => {
	cy.visit('http://localhost:1234')
	const listOfOnlinePaths = listOfPaths(selectSimpleOnlinePaths)
	const testVideo = map(compose(appIsReady, reload, checkPath, listOfVideoPaths))
	cy.log('Test video paths')
	testVideo(videoStateList)
	cy.log('Test audio paths')
	testAudio(audioStateList)
})

import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './profileStatus';

describe("ProfileStatus component", () => {
  test("status from props should appear in the state", () => {
    const component = create(<ProfileStatus status="test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test status");
  });

  test("span should be dispayed after status is created", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  }); 

  test("input should not appear after status is created", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    expect(() => {root.findByType("input")}).toThrow(); 
  }); 

  test("span should contain correct status", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0 ]).toBe("test status");
  }); 
  
  test("input should be dispayed in editMode", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("test status");
  }); 

  test("span should not be dispayed in editMode", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    expect(() => {root.findByType("span")}).toThrow(); 
  }); 

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="test status" updateStatus={mockCallback}  />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1); 
  }); 
});


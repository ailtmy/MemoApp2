import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoListScreen from "./src/screens/MemoListScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

export default function App() {
	// return <MemoDetailScreen />;
	return <MemoListScreen />;
	// return <MemoEditScreen />;
	// return <MemoCreateScreen />;
	// return <LoginScreen />;
	// return <SignUpScreen />;
}

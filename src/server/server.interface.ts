import express from "express";

interface Express {
	getExpress(): express.Express;
	listen(): void;
	stop(): void;
}

export default Express;

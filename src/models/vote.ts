export interface Vote {
	id: string;
	poll_id: string;
	optionId: string;
	createdAt: Date;
	clientIp?: string;
}

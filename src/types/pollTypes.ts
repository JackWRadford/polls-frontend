export type Option = {
	id: string;
	title: string;
};

export type Poll = {
	_id: string;
	title: string;
	options: Option[];
	createdAt: Date;
	endsAt: Date;
};

export type Vote = {
	id: string;
	poll_id: string;
	optionId: string;
	createdAt: Date;
	clientIp?: string;
};

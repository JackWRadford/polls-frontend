export interface Option {
	id: string;
	title: string;
}

export interface Poll {
	id: string;
	title: string;
	options: Option[];
	createdAt: Date;
	endsAt: Date;
}

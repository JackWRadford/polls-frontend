export interface Option {
	id: string;
	title: string;
}

export interface Poll {
	_id: string;
	title: string;
	options: Option[];
	createdAt: Date;
	endsAt: Date;
}

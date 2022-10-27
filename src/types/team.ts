export type Team = Array<TeamMember>

export type TeamMember = {
	id: string
	name: string
	job_title_sys: string
	job_description_sys: string
	is_country_manager: boolean
	sorting_priority: number
	profile_image_url: string
	email: string
	phone_number: string
	linkedin_url: string
	country_iso_codes: string[]
}

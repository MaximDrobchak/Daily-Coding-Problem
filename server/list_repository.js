class ListRepository {
	constructor(dao) {
		this.dao = dao;
	}
	getById(id) {
		return this.dao.get(`SELECT * FROM projects WHERE id = ?`, [
			id,
		]);
	}
	getByProjectName(listName) {
		return this.dao.get(`SELECT * FROM projects = ?`, [listName]);
	}
}

module.exports = ListRepository;

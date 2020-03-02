const db = require('./conn');

class ClassInfo {
    constructor(id, topic, status_id) {
        this.id = id;
        this.topic = topic;
        this.status_id = status_id;

    }

    static async getAllTopicData() {
        try {
            const response = await db.any(`SELECT * from class_review INNER JOIN class_status on class_review.status_id = class_status.id ORDER BY class_review.id;`)
            console.log('Response from DB is', response);
            return response;
        } catch (error) {
            console.error("ERROR", error);
            return error;
        }
    }
    static async getAllStatuses() {
        try {
            const response = await db.any('SELECT * FROM class_status');
            return response;
        } catch (error) {
            console.error("ERROR", error);
            return error;
        }
    }
}

module.exports = ClassInfo;
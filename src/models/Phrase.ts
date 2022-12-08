import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/postgres"

export interface PhraseInstance extends Model {
    idphrase: number;
    author: string;
    text: string;
}

export const Phrase = sequelize.define<PhraseInstance>("Phrase", {
    idphrase: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
})
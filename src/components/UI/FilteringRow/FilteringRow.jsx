import React from 'react';
import {Col, Row, Select} from "antd";
import {useNavigate, useParams} from "react-router";
import '../../../style/ContentContainer.css'
import FilterSelect from "./FilterSelect/FilterSelect";

const FilteringRow = () => {
    const params = useParams();
    const navigate = useNavigate();

    const platform = (params.platform) ? params.platform : 'all'
    const category = (params.category) ? params.category : 'all'
    const sortBy = (params.sortBy) ? params.sortBy : 'all'

    return (
        <Row
            className={"contentContainer"}
            justify={"center"}
        >
            <FilterSelect
                text={'Платформа:'}
                defaultValue={platform}
                onChange={(value) => {navigate(`/${value}/${category}/${sortBy}`)}}
                options={[
                    { value: 'pc', label: 'Windows (ПК)' },
                    { value: 'browser', label: 'Браузер' },
                    { value: 'all', label: 'Все' },
                ]}
            />

            <FilterSelect
                text={'Жанр:'}
                defaultValue={category}
                onChange={(value) => {navigate(`/${platform}/${value}/${sortBy}`)}}
                options={[
                    { value: 'mmo', label: 'MMO' },
                    { value: 'mmorpg', label: 'MMORPG' },
                    { value: 'shooter', label: 'Shooter' },
                    { value: 'strategy', label: 'Strategy' },
                    { value: 'moba', label: 'MOBA' },
                    { value: 'card', label: 'Card' },
                    { value: 'racing', label: 'Racing' },
                    { value: 'sports', label: 'Sports' },
                    { value: 'social', label: 'Social' },
                    { value: 'fighting', label: 'Fighting' },
                    { value: 'all', label: 'Все' },
                ]}
            />

            <FilterSelect
                text={'Сортировать по:'}
                defaultValue={sortBy}
                onChange={(value) => {navigate(`/${platform}/${category}/${value}`)}}
                options={[
                    { value: 'relevance', label: 'Актуальности' },
                    { value: 'popularity', label: 'Популярности' },
                    { value: 'release-date', label: 'Дате пубрикации' },
                    { value: 'alphabetical', label: 'Алфавиту' },
                    { value: 'all', label: 'Без сортировки' },
                ]}
            />
        </Row>
    );
};

export default FilteringRow;
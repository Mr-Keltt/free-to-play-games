import React from 'react';
import {Col, Row, Select} from "antd";
import {useNavigate, useParams} from "react-router";

const FilteringRow = () => {
    const params = useParams();
    const navigate = useNavigate();

    const platform = (params.platform) ? params.platform : 'all'
    const category = (params.category) ? params.category : 'all'
    const sortBy = (params.sortBy) ? params.sortBy : 'all'

    return (
        <Row>
            <Col>
                <Row>
                    <Col>
                        <p>Платформа:</p>
                    </Col>
                    <Col>
                        <Select
                            defaultValue={platform}
                            style={{ width: 130 }}
                            onChange={(value) => {navigate(`/${value}/${category}/${sortBy}`)}}
                            options={[
                                { value: 'pc', label: 'Windows (ПК)' },
                                { value: 'browser', label: 'Браузер' },
                                { value: 'all', label: 'Все' },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row>
                    <Col>
                        <p>Жанр:</p>
                    </Col>
                    <Col>
                        <Select
                            defaultValue={category}
                            style={{ width: 120 }}
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
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row>
                    <Col>
                        <p>Сортировать по:</p>
                    </Col>
                    <Col>
                        <Select
                            defaultValue={sortBy}
                            style={{ width: 120 }}
                            onChange={(value) => {navigate(`/${platform}/${category}/${value}`)}}
                            options={[
                                { value: 'relevance', label: 'Актуальности' },
                                { value: 'popularity', label: 'Популярности' },
                                { value: 'release-date', label: 'Дате пубрикации' },
                                { value: 'alphabetical', label: 'Алфавиту' },
                                { value: 'all', label: 'Без фильтра' },
                            ]}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default FilteringRow;
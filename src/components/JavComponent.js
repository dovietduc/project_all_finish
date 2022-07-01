import { useState } from 'react';
import javList from '../service/jav';

function JavComponent() {
    console.log('render begin');
    const [jav, setJav] = useState(javList);

    console.log('state', jav);

    const handleDeleteJav = (id) => {
        const stateJavNew = jav.filter((javItem) => javItem.id != id);
        setJav(stateJavNew);
    }

    console.log('render end');

    if(jav.length == 0) {
        return (
            <h2>Không có Jav để chọn</h2>
        )
    }

    return (
        <main className="container">
            <h2>Có {jav.length} diễn viên JAV để chọn</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {jav.map(function (javItem) {
                        return (
                            <tr key={javItem.id}>
                                <th scope="row">{javItem.id}</th>
                                <td>{javItem.name}</td>
                                <td><img src={javItem.image} style={{width: 100}}/></td>
                                <td>
                                    <button 
                                        onClick={() => handleDeleteJav(javItem.id)}
                                        className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </main>
    );
}

export default JavComponent;

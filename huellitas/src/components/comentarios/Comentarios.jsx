import './comentarios.css'

const Comentarios = () => {
    return (
        <>

            <section className="py-1">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center mb-4">
                        <h2 className="title-product px-5 text-white">Comentarios</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="review-item">
                                <div className="people-container">
                                    <div className="d-flex py-3">
                                        <img src="../src/enzo.png" className="people-review-image" alt="foto de persona 2" />
                                        <div className="people-review-name px-3">
                                            <h5>Enzo de la Fuente</h5>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="p-review">
                                    <span className="sangria">El</span> procesador Ryzen que adquirí superó todas mis expectativas. Su rendimiento
                                    en tareas de multitarea y renderizado es impresionante. Además, la eficiencia energética de este
                                    procesador es destacable, lo que se traduce en un menor consumo de energía y una temperatura más baja
                                    durante su funcionamiento.
                                </p>
                            </div>
                            <div className="review-item">
                                <div className="people-container">
                                    <div className="d-flex py-3">
                                        <img src="../src/gonzalo.png" className="people-review-image" alt="foto de persona 1" />
                                        <div className="people-review-name px-3">
                                            <h5>Gonzalo Juarez</h5>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="p-review">
                                    <span className="sangria">El</span> procesador Ryzen ha mejorado significativamente mi experiencia de juego.
                                    Su potencia de cálculo y su capacidad para manejar cargas intensivas de gráficos hacen que los juegos se
                                    ejecuten suavemente y sin problemas. Definitivamente, es una opción excelente para los gamers exigentes.
                                </p>
                            </div>
                            <div className="review-item">
                                <div className="people-container">
                                    <div className="d-flex py-3">
                                        <img src="../src/cin.png" className="people-review-image" alt="foto de persona 3" />
                                        <div className="people-review-name px-3">
                                            <h5>Cinthia Karapova</h5>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star"></i>
                                            <i className="bi-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <p className="p-review">
                                    <span className="sangria">El</span> procesador Ryzen ha acelerado mi flujo de trabajo en edición de video. Su
                                    capacidad para procesar rápidamente grandes archivos de video y aplicar efectos en tiempo real ha sido
                                    fundamental para mejorar mis tareas diarias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comentarios
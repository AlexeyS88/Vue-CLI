<template>
    <div class="container">
        <form class="card" @submit.prevent=" submitHandler ">
            <h1>Анкета на Vue разработчика!</h1>
            <div class="form-control">
                <label for="name">Как тебя зовут?</label>
                <input type="text" id="name" placeholder="Введи имя" v-model.trim=" name " ref="nameInput">
            </div>

            <div class="form-control">
                <label for="age">Выбери возраст</label>
                <input type="number" id="age" max="70" min="20" v-model.number=" age ">
            </div>

            <div class="form-control">
                <label for="city">Твой город</label>
                <select id="city" v-model=" city ">
                    <option value="spb">Санкт-Петербург</option>
                    <option value="msk">Москва</option>
                    <option value="kzn">Казань</option>
                    <option selected value="nsk">Новосибирск</option>
                </select>
            </div>

            <div class="form-checkbox">
                <span class="label">Готов к переезду в Токио?</span>
                <div class="checkbox">
                    <label><input type="radio" name="trip" v-model=" relocate " value="yes" /> Да</label>
                </div>

                <div class="checkbox">
                    <label><input type="radio" name="trip" v-model=" relocate " value="no" /> Нет</label>
                </div>
            </div>

            <div class="form-checkbox">
                <span class="label">Что знаешь во Vue?</span>
                <div class="checkbox">
                    <label><input type="checkbox" name="skils" v-model=" skils " value="Vuex" /> Vuex</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="skils" v-model=" skils " value="Vue CLI" /> Vue CLI</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="skils" v-model=" skils " value="Vue Router" /> Vue
                        Router</label>
                </div>
            </div>
            <div class="form-checkbox">
                <span class="label">Правила нашей компании</span>
                <div class="checkbox">
                    <label><input type="checkbox" v-model=" agree " /> С правилами согласен</label>
                </div>
            </div>
            <button type="submit" class="btn primary">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
    data ()
    {
        return {
            name: "Antey",
            age: 23,
            city: 'msk',
            relocate: null,
            skils: [],
            agree: false
        };
    },
    methods: {
        submitHandler ( event )
        {
            console.group( 'Form Data' );
            console.log( 'Name:', this.name );
            console.log( 'Name Ref:', this.$refs.nameInput.value.trim() );
            console.log( 'Age:', this.age );
            console.log( 'Age:', typeof this.age );
            console.log( 'City:', this.city );
            console.log( 'To Tokyo', this.relocate );
            console.log( 'Skils:', this.skils );
            console.log( 'Agree:', this.agree );

            console.groupEnd();

        }
    }
};
</script>

<style></style>
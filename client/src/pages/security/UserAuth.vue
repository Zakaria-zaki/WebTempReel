<template>
<div class="my-40">
  <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div class="hidden lg:block lg:w-1/2 bg-cover" style="background-image:url('https://www.denis-motos-services.com/public/assets/gifs/prestation-02.jpg')"></div>
        <div class="w-full p-8 lg:w-1/2">
            <form @submit.prevent="submitForm">
                <h2 class="text-2xl font-semibold text-gray-700 text-center">Motoservices</h2>
                <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                <div class="mt-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" required v-model.trim="email">
                </div>
                <div class="mt-4">
                    <div class="flex justify-between">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    </div>
                    <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" required v-model.trim="password">
                </div>
                <p v-if="!formIsValid">Please enter a valid email and password .</p>
                <p v-if="error">{{ error }}</p>
                <div class="mt-8">
                    <button type="submit" class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            isLoading: false,
            error: null
        }
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;
            this.error = null;
            if (this.email === '' || !this.email.includes('@') || this.password.length < 4) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                email: this.email,
                password: this.password
            };

            try {
                await this.$store.dispatch('auth/login', actionPayload);
                const redirectUrl = '/' + (this.$route.query.redirect || 'messages');
                this.$router.replace(redirectUrl);
            } catch (error) {
                this.error = error.message || 'Failed to authenticated, try later.';
            }

            this.isLoading = false;
        }
    }
}
</script>


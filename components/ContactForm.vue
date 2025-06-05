<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitError = ref('');
const submitSuccess = ref(false);

const handleSubmit = async () => {
  try {
    isSubmitting.value = true;
    submitError.value = '';
    
    // Here you would typically make an API call to your backend
    console.log('Form submitted:', form.value);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    submitSuccess.value = true;
    form.value = { name: '', email: '', message: '' };
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
    
  } catch (error) {
    console.error('Error submitting form:', error);
    submitError.value = 'Failed to send message. Please try again later.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-16 w-full bg-gray-100">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
          Get In Touch
        </h2>
        <p class="text-sm text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Success Message -->
          <div 
            v-if="submitSuccess" 
            class="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg"
          >
            Thank you for your message! I'll get back to you soon.
          </div>
          
          <!-- Error Message -->
          <div 
            v-if="submitError" 
            class="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg"
          >
            {{ submitError }}
          </div>

          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <UInput
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
              class="w-full"
            />
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <UInput
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="your.email@example.com"
              class="w-full"
            />
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <UTextarea
              id="message"
              v-model="form.message"
              required
              placeholder="How can I help you?"
              :rows="5"
              class="w-full"
            />
          </div>

          <!-- Submit Button -->
          <div class="pt-2">
            <UButton
              type="submit"
              color="primary"
              :loading="isSubmitting"
              class="w-full sm:w-auto px-8 py-3 text-sm font-medium"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </UButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

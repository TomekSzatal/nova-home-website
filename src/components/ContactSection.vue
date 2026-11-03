<script setup>
import { ref } from "vue";

const isSending = ref(false);
const formMessage = ref("");
const formSuccess = ref(false);
const website = ref("");

async function handleSubmit(event) {
  if (isSending.value) return;

  isSending.value = true;
  formMessage.value = "";
  formSuccess.value = false;

  const form = event.target;
  const formData = new FormData(form);
  if (website.value) {
  isSending.value = false;
  return;
  }

  if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) {
    formMessage.value = "Formularz nie został skonfigurowany.";
    isSending.value = false;
    return;
  }

  formData.append(
    "access_key",
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  );

  formData.append("subject", "Nowe zapytanie - NOVA HOME");
  formData.append("from_name", "NOVA HOME");

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      },
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error("Wysyłanie nie powiodło się.");
    }

    formSuccess.value = true;
    formMessage.value = "Wiadomość została wysłana!";
    form.reset();
  } catch (error) {
    formMessage.value =
      "Nie udało się wysłać wiadomości. Spróbuj ponownie.";
  } finally {
    isSending.value = false;
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact-info">
      <span class="section-label">SKONTAKTUJ SIĘ Z NAMI</span>

      <h2>
        Porozmawiajmy
        <span>o Twoim projekcie.</span>
      </h2>

      <p>
        Planujesz remont lub wykończenie wnętrza?
        Opowiedz nam o swoim pomyśle.
        Wspólnie znajdziemy najlepsze rozwiązanie.
      </p>

      <div class="contact-details">
        <div class="contact-item">
          <span class="contact-icon">✆</span>
          <div>
            <strong>Telefon</strong>
            <span>+48 000 000 000</span>
          </div>
        </div>

        <div class="contact-item">
          <span class="contact-icon">✉</span>
          <div>
            <strong>E-mail</strong>
            <span>kontakt@novahome.pl</span>
          </div>
        </div>

        <div class="contact-item">
          <span class="contact-icon">⌖</span>
          <div>
            <strong>Obszar działania</strong>
            <span>Polska</span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-form-wrapper">
      <h3>Poproś o bezpłatną wycenę</h3>

      <p class="form-description">
        Wypełnij formularz, a skontaktujemy się z Tobą.
      </p>

      <form @submit.prevent="handleSubmit">
        <div class="form-row">
          <label>
            Imię i nazwisko
            <input
              type="text"
              name="name"
              placeholder="Jan Kowalski"
              autocomplete="name"
              required
            />
          </label>

          <label>
            Numer telefonu
            <input
              type="tel"
              name="phone"
              placeholder="+48 000 000 000"
              autocomplete="tel"
              required
            />
          </label>
        </div>

        <label>
          Adres e-mail
          <input
            type="email"
            name="email"
            placeholder="jan@example.com"
            autocomplete="email"
            required
          />
        </label>

        <label>
          Rodzaj usługi
          <select name="service" required>
            <option value="" disabled selected>
              Wybierz usługę
            </option>
            <option value="Remont mieszkania">
              Remont mieszkania
            </option>
            <option value="Wykończenie wnętrza">
              Wykończenie wnętrza
            </option>
            <option value="Remont łazienki">
              Remont łazienki
            </option>
            <option value="Remont kuchni">
              Remont kuchni
            </option>
            <option value="Inne prace">
              Inne prace
            </option>
          </select>
        </label>

        <label>
          Opisz swój projekt
          <textarea
            name="message"
            rows="5"
            placeholder="Opowiedz nam o swoim remoncie..."
            required
          ></textarea>
        </label>

        <div class="honeypot" aria-hidden="true">
          <label for="website-field">
            Strona internetowa
          </label>
          <input
            id="website-field"
            v-model="website"
            type="text"
            name="botcheck"
            tabindex="-1"
            autocomplete="off"
          />
        </div>

        <button type="submit" :disabled="isSending">
          {{ isSending ? "Wysyłanie..." : "Wyślij zapytanie" }}
        </button>

        <p
          v-if="formMessage"
          class="form-message"
          :class="{ success: formSuccess }"
          role="status"
          aria-live="polite"
        >
          {{ formMessage }}
        </p>

        <p class="privacy-note">
          Dane podane w formularzu zostaną wykorzystane
          do obsługi Twojego zapytania.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 110px 8%;
  background: #252525;
  color: #ffffff;
}

.section-label {
  color: #d6ad79;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
}

.contact-info h2 {
  margin: 22px 0;
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.2;
}

.contact-info h2 span {
  display: block;
  color: #d6ad79;
}

.contact-info > p {
  max-width: 480px;
  color: #bdbdbd;
  font-size: 15px;
  line-height: 1.9;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 55px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #383838;
  color: #d6ad79;
  font-size: 23px;
}

.contact-item div {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.contact-item strong {
  font-size: 14px;
}

.contact-item div span {
  color: #bdbdbd;
  font-size: 13px;
}

.contact-form-wrapper {
  padding: 40px;
  background: #ffffff;
  color: #252525;
}

.contact-form-wrapper h3 {
  margin-bottom: 10px;
  font-size: 25px;
}

.form-description {
  margin-bottom: 30px;
  color: #777777;
  font-size: 14px;
}

.contact-form-wrapper form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.contact-form-wrapper label {
  display: flex;
  flex-direction: column;
  gap: 9px;
  color: #444444;
  font-size: 13px;
  font-weight: 600;
}

.contact-form-wrapper input,
.contact-form-wrapper select,
.contact-form-wrapper textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #e5e5e5;
  outline: none;
  background: #fafafa;
  color: #252525;
  font-family: inherit;
  font-size: 13px;
}

.contact-form-wrapper input:focus,
.contact-form-wrapper select:focus,
.contact-form-wrapper textarea:focus {
  border-color: #b58a55;
}

.contact-form-wrapper textarea {
  resize: vertical;
}

.contact-form-wrapper button {
  padding: 17px;
  border: none;
  background: #b58a55;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
}

.contact-form-wrapper button:hover {
  background: #967044;
}


.form-message {
  margin: 0;
  color: #c0392b;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
}

.form-message.success {
  color: #218838;
}

.contact-form-wrapper button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.honeypot {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.privacy-note {
  color: #999999;
  font-size: 11px;
  line-height: 1.6;
}

@media (max-width: 850px) {
  .contact {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

@media (max-width: 550px) {
  .contact {
    padding: 75px 6%;
  }

  .contact-form-wrapper {
    padding: 25px 18px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact {
    grid-template-columns: minmax(0, 1fr);
    gap: 45px;
    padding: 70px 6%;
  }

  .contact-info h2 {
    font-size: clamp(32px, 7vw, 42px);
  }

  .contact-info > p {
    font-size: 16px;
  }

  .contact-details {
    margin-top: 35px;
  }

  .contact-form-wrapper {
    min-width: 0;
    padding: 30px;
  }

  .contact-form-wrapper h3 {
    font-size: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-wrapper input,
  .contact-form-wrapper select,
  .contact-form-wrapper textarea {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .contact-form-wrapper {
    padding: 25px 18px;
  }

  .contact-form-wrapper button {
    width: 100%;
  }
}
</style>

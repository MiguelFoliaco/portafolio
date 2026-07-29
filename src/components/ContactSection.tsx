import { useForm, ValidationError } from '@formspree/react'
import { WindowShell } from './WindowShell'

const endpoint = 'myyvddev'

export const ContactSection = () => {

  const [state, handleSubmit] = useForm(endpoint);

  return (
    <WindowShell title="NEW_TRANSMISSION.MSG" id="contact" accent="pink" className="md:col-span-8">
      <div className="p-8 bg-white">
        <form className="space-y-6" onSubmit={async (e) => {
          await handleSubmit(e);

          setTimeout(() => {
            e.currentTarget.childNodes.forEach((node) => {
              if (node instanceof HTMLInputElement) {
                node.value = ''
              }
            })
          }, 2000)
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-label-md text-[11px] mb-2 uppercase">From:</label>
              <input disabled={state.submitting} name="name" id="name" className="w-full bg-[color:var(--tertiary)]/20 border border-[color:var(--outline)] p-3 font-label-md text-[12px] focus:ring-0 focus:border-[color:var(--secondary)] outline-none" placeholder="USER@HOST" type="text" />
            </div>
            <div>
              <label className="block font-label-md text-[11px] mb-2 uppercase">Email:</label>
              <input disabled={state.submitting} name="email" id="email" type="email" className="w-full bg-[color:var(--tertiary)]/20 border border-[color:var(--outline)] p-3 font-label-md text-[12px] focus:ring-0 focus:border-[color:var(--secondary)] outline-none" placeholder="YOUR_EMAIL" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div>
            <label className="block font-label-md text-[11px] mb-2 uppercase">Message:</label>
            <textarea disabled={state.submitting} name="message" id="message" className="w-full bg-[color:var(--tertiary)]/20 border border-[color:var(--outline)] p-3 font-label-md text-[12px] focus:ring-0 focus:border-[color:var(--secondary)] outline-none resize-none" placeholder="TYPE YOUR MESSAGE HERE..." rows={5} />
            <ValidationError
              prefix="Mensaje"
              field="message"
              errors={state.errors}
            />
          </div>
          <button disabled={state.submitting} className="start-btn w-full py-3 bg-purple-300! cursor-pointer  text-white font-label-md uppercase tracking-widest hover:scale-90 transition-all active:scale-95" type="submit">
            {
              state.submitting ? 'SENDING...' :
                <>{

                  state.succeeded
                    ? 'MESSAGE SENT'
                    : 'SEND MESSAGE'
                }
                </>
            }
          </button>
        </form>
      </div>
    </WindowShell>
  )
}

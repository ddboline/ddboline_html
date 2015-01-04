from django.shortcuts import render, get_object_or_404
from django.http import Http404, HttpResponseRedirect
from django.template import RequestContext, loader
from django.core.urlresolvers import reverse
from django.views import generic

from polls.models import Question, Choice

# Create your views here.

class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_poll_list'

    def get_queryset(self):
        """ Return last five published questions """
        return Question.objects.order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'


def vote(request, poll_id):
    poll = get_object_or_404(Question, pk=poll_id)
    try:
        selected_choice = poll.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        return render(request, 'polls/detail.html', {
            'poll': poll, 'error_message': "You didn't select a choice.",
           })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args=(poll.id,)))

#def index(request):
    #latest_poll_list = Question.objects.order_by('-pub_date')[:5]
    #template = loader.get_template('polls/index.html')
    #context = RequestContext(request, {'latest_poll_list': latest_poll_list})
    #output = ', '.join([p.question_text for p in latest_poll_list])
    #return render(request, 'polls
    #return HttpResponse(template.render(context))
    #context = {'latest_poll_list': latest_poll_list}
    #return render(request, 'polls/index.html', context)

#def detail(request, poll_id):
    #poll = get_object_or_404(Question, pk=poll_id)
    #return render(request, 'polls/detail.html', {'poll': poll})

#def results(request,  poll_id):
    #poll = get_object_or_404(Question, pk=poll_id)
    #return render(request, 'polls/results.html', {'poll': poll})
